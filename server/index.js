import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

mongoose
    .connect(process.env.MONGO)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error));

app.listen(3000, () => {
    console.log('Server is running on Port 3000!');
});
