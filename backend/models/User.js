const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "This is not a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

//Password hash
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

//Password check, compare it to the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
