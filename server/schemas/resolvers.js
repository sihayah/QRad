const { Card, User } = require('../models');

const resolvers = {
  Query: {
    card: async () => {
      return Card.find().sort({ asc });
    },

    card: async (parent, { _id }) => {
      return Card.findOne({ _id });
    },
    user: async () => {
      return User.find().sort({ asc });
    },

    user: async (parent, { _id }) => {
      return User.findOne({ _id });
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
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
        const card = await Card.create(args);
        const cardInput = await cardInput.create(args);
        return { card , cardInput };
      } 
    },
    addContact: async (parent, args, context) => {
      if (context.user) {
        const contact = await User.create(args);
      const card = await Card.create(args);
      return { contact , card };
      }
    },
    removeContact: async (parent, { _id }, context) => {
      if (context.user) {
        contact.deleteOne({ _id: ID }, function(err, result) {
          if (err) {
          res.send(err);
          } else {
          res.send(result);
          }
        });
        }
      }
    }
  };

module.exports = resolvers;
