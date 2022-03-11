const { Card, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/Authorization");

const resolvers = {
  Query: {
    cards: async () => {
      return Card.find().sort({ preferredName: 1 });
    },

    card: async (parent, { _id }) => {
      return Card.findOne({ _id });
    },
    users: async () => {
      return User.find()
        .sort({ username: 1 })
        .select("-__v -password")
        .populate("cards")
        .populate("contacts");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("cards")
        .populate("contacts");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("cards")
          .populate("contacts");
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addCard: async (parent, args, context) => {
      if (context.user) {
        console.log(args);
        const card = await Card.create({
          ...args,
          username: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { cards: card._id } },
          { new: true, runValidators: false }
        );
        return card;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateCard: async (parent, { _id, cardData }, context) => {
      if (context.user) {
        console.log(_id);
        const updatedCard = await Card.findOneAndUpdate(
          {"_id": _id},
          { "$set": cardData},
          { "new": true}
        );

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { cards: updatedCard._id } },
          { new: true, runValidators: false }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addContact: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { contacts: _id } },
          { new: true }
        ).populate("contacts");
        return updatedUser;
      }
      throw new AuthenticationError("You need to log in");
    },
    removeContact: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { contacts: _id } },
          { new: true }
        ).populate("contacts");
        return updatedUser;
      }
      throw new AuthenticationError("You need to log in");
    },
    deleteCard: async (parent, { _id }, context) => {
      if (context.user) {
        const card = await Card.findOneAndDelete(_id);

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { cards: card._id } },
          { new: true, runValidators: false }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to log in");
    },
  },
};

module.exports = resolvers;
