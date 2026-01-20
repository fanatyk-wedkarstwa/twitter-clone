import mongoose from "mongoose";
import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";

export const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid User Id" });
  }
  try {
    const user = await User.findById(id, "username pfp");
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
export const signUp = async (req, res) => {
  const { username, password, email } = req.body;

  // User input validation
  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all required fields" });
  }
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email format." });
  }
  const existingEmail = await User.find({ email });
  if (existingEmail) {
    return res
      .status(400)
      .json({ success: false, message: "Email is already taken." });
  }
  const existingUser = await User.find({ username });
  if (existingUser) {
    return res
      .status(400)
      .json({ success: false, message: "Username is already taken." });
  }

  // Password hashing
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Creating new User
  const newUser = new User({
    username,
    password: hashedPassword,
    email,
  });
  if (newUser) {
    try {
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        success: true,
        data: {
          _id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          followers: newUser.followers,
          following: newUser.following,
          pfp: newUser.pfp,
          coverImg: newUser.coverImg,
          bio: newUser.bio,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  } else {
    return res
      .status(500)
      .json({ success: false, message: "Failed creating user." });
  }
};
export const logIn = async (req, res) => {
  res.send("Login page");
};
export const logOut = async (req, res) => {
  res.send("Logout page");
};
