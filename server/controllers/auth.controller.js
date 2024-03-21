import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { errorHandler } from '../utils/error.js';

export async function signup(req, res, next) {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json('User created successfully');
    } catch (error) {
        next(error);
    }
}

export async function signin(req, res, next) {
    const { email, password } = req.body;

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found!'));

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));

        //JWT to store cookie
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        //ommiting the password in the response json
        const { password: pass, ...rest } = validUser._doc;

        res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}

export async function google(req, res, next) {
    const { name, email, photo } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            //JWT to store cookie
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            //ommiting the password in the response json
            const { password: pass, ...rest } = user._doc;

            res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
        } else {
            const generatedPassword =
                Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({
                username:
                    name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-4),
                email,
                password: hashedPassword,
                avatar: photo,
            });
            await newUser.save();

            //JWT to store cookie
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            //ommiting the password in the response json
            const { password: pass, ...rest } = newUser._doc;

            res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
        }
    } catch (error) {
        next(error);
    }
}
