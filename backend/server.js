import express, { json } from "express";
import userRoutes from "./routes/user.routes.js";

const PORT = process.env.PORT || 8001;
const app = express();

app.use(json());

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
