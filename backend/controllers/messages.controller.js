import mongoose from "mongoose";
import Message from "../models/Message.model.js";

export const getMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Message Id" });
  }
  try {
    const message = await Message.findById(id);
    res.status(200).json({ success: true, data: message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
export const createMessage = async (req, res) => {
  const message = req.body;

  if (!message.author || !message.body) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newMessage = new Message(message);

  try {
    await newMessage.save();
    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
