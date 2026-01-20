import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  interactions: {
    likes: {
      type: Number,
      required: false,
      default: 0,
    },
    comments: [
      {
        type: String,
        required: false,
      },
    ],
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
