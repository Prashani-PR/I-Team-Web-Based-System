import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.jsx';

export const authRoutes = () => {
  const router = express.Router();

  router.post('/register', async (req, res) => {
    const { role, name, email, userId, phone, password, confirmPassword } = req.body;

    if (!role || !name || !email || !userId || !phone || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'Email already registered.' });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        role,
        name,
        email,
        userId,
        phone,
        password: hashedPassword
      });

      await newUser.save();
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error.' });
    }
  });

  return router;
};
