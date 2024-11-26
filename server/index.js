import express from "express"; // Use ES module import syntax
import mongoose from "mongoose"; // Use ES module import syntax
import bodyParser from "body-parser"; // Use ES module import syntax
import dotenv from "dotenv"; // Use ES module import syntax
import cors from "cors"; // Use ES module import syntax
import route from "./routes/user.route.js"; // Import user routes

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example route
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// Register user routes
app.use("/api", route); // Prefix all user routes with /api/users

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI) // Add options for better compatibility
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure code
  });

