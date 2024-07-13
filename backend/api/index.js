import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import folderRoutes from "./routes/folder.routes.js";
import imageRoutes from "./routes/image.routes.js";
import cors from "cors";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/folders", folderRoutes);
app.use("/api/images", imageRoutes);

app.get("/", (req, res) => {
  res.send("Hello!");
});

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
