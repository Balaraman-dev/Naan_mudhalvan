import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/userModel.js'; // your model path

dotenv.config();
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Failed:", err.message));

// POST endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password_hash } = req.body;
    const user = new User({ name, email, password_hash });
    await user.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
