const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const cardSchema = new Schema({
  tagline: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 140,
    trim: true,
  },
  preferredName: {
    type: String,
    required: false,
    trim: true,
  },
  pronouns: {
    type: String,
    required: false,
    trim: true,
  },
  title: {
    type: String,
    required: false,
    trim: true,
  },
  company: {
    type: String,
    required: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must be an email address!"],
  },
  phone: {
    type: String,
    required: false,
    match: [
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      "Must include an internal dial code and phone number",
    ],
  },
  linkedIn: { type: String, required: false, unique: false, trim: true },
  instagram: { type: String, required: false, unique: false, trim: true },
  website: { type: String, required: false, unique: false, trim: true },

  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const Card = model("Card", cardSchema);

module.exports = Card;
