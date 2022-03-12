const { Schema, model } = require("mongoose");
// const dateFormat = require("../utils/dateFormat");

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
    sparse: true,
    match: [/.+@.+\..+/, "Must be an email address!"],
  },
  phone: {
    type: String,
    trim: true,
    match: [
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      "Must include an internal dial code and phone number",
    ],
  },
  linkedIn: { type: String, required: false, trim: true },
  Instagram: { type: String, required: false, trim: true },
  website: { type: String, required: false, trim: true },
});

const Card = model("Card", cardSchema);

module.exports = Card;
