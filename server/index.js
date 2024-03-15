import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();

const app = express();

app.use('/api/user', userRouter);

mongoose
    .connect(process.env.MONGO)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error));

app.listen(3000, () => {
    console.log('Server is running on Port 3000!');
});
