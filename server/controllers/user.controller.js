import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

import User from '../models/user.model.js';
import Listing from '../models/listing.model.js';
import { response } from 'express';

export function test(_req, res) {
    res.json({ message: 'Hello World!!!' });
}

export async function updateUser(req, res, next) {
    if (req.user.id !== req.params.id)
        return next(errorHandler(401, 'You can only update your own account!'));

    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    avatar: req.body.avatar,
                },
            },
            { new: true }
        );

        const { password, ...others } = updatedUser._doc;

        res.status(200).json(others);
    } catch (error) {
        next(error);
    }
}

export async function deleteUser(req, res, next) {
    if (req.user.id !== req.params.id)
        return next(errorHandler(401, 'You can only delete your own account!'));

    try {
        await User.findByIdAndDelete(req.params.id);

        res.clearCookie('access_token');
        res.status(200).json({ message: 'User has been deleted!' });
    } catch (error) {
        next(error);
    }
}

export async function getUserListings(req, res, next) {
    if (req.user.id !== req.params.id)
        return next(errorHandler(401, 'You can only view your own listings!'));
    try {
        const listings = await Listing.find({ userRef: req.params.id });
        res.status(200).json(listings);
    } catch (error) {
        next(error);
    }
}

export async function getUser(req, res, next) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) return next(errorHandler(404, 'User not found!'));

        const { password: pass, ...rest } = user._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}
