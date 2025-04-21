import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { authRoutes } from './routes/authRoutes.js';

export const server = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/api/users', authRoutes());

  mongoose.connect('mongodb://localhost:27017/your-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  }).catch(err => console.error('MongoDB connection error:', err));
};
