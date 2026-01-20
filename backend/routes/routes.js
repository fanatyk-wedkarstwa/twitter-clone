import express from "express";
import {
  getUser,
  logIn,
  logOut,
  signUp,
} from "../controllers/users.controller.js";
import {
  createMessage,
  getMessage,
} from "../controllers/messages.controller.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);

router.get("/message/:id", getMessage);
router.post("/message", createMessage);

export default router;
