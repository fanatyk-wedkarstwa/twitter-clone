import express, { json } from "express";
import routes from "./routes/routes.js";
import { connectDB } from "./db/db.js";

const PORT = process.env.PORT || 8001;
const app = express();

app.use(json());

app.use("/api", routes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on port ${PORT}...`);
});
