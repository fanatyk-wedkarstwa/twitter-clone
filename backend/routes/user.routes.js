import express from "express";
import {
  createUser,
  getUser,
  loginUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.post("/signup", createUser);
router.post("/login", loginUser);

export default router;
