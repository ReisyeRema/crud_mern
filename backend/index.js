import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"; // Path relatif yang benar

const app = express();

// Ganti <username>, <password>, dan <dbname> sesuai informasi dari MongoDB Atlas
mongoose.connect('mongodb+srv://reisye:Y6w9huzDtJATi1cQ@cluster0.coddr.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connection Success');
    app.listen(5000, () => console.log('Server up and running on port 5000'));
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

app.use(cors());
app.use(express.json());
app.use(UserRoute); // Gunakan router yang benar

