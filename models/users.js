const { Schema, model } = require("mongoose");

const name = "users";

const User = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["M", "F"],
  },
});

User.index({ username: 1 }, { unique: true });

module.exports = model(name, User, name);
