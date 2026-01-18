import mongoose from "mongoose";
import User from "../models/User.model.js";

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
export const createUser = async (req, res) => {
  const user = req.body;

  if (!user.username || !user.password || !user.email) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all required fields" });
  }

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
export const loginUser = async (req, res) => {
  res.send("Login page");
};
