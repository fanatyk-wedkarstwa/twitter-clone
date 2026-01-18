import express from "express";
import {
  createUser,
  getUser,
  loginUser,
} from "../controllers/users.controller.js";
import {
  createMessage,
  getMessage,
} from "../controllers/messages.controller.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.post("/signup", createUser);
router.post("/login", loginUser);

router.get("/message/:id", getMessage);
router.post("/message", createMessage);

export default router;
