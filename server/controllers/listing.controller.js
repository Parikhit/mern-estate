import Listing from '../models/listing.model.js';

import { errorHandler } from '../utils/error.js';

export async function createListing(req, res, next) {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
}

export async function deleteListing(req, res, next) {
    const listing = await Listing.findById(req.params.id);

    if (!listing) return next(errorHandler(404, 'Listing not found!'));

    if (req.user.id !== listing.userRef)
        return next(errorHandler(401, 'You can only delete your own listing!'));

    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json('Listing has been deleted!');
    } catch (error) {
        next(error);
    }
}

export async function updateListing(req, res, next) {
    const listing = await Listing.findById(req.params.id);

    if (!listing) return next(errorHandler(404, 'Listing not found!'));

    if (req.user.id !== listing.userRef)
        return next(errorHandler(401, 'You can only delete your own listing!'));

    try {
        const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json(updatedListing);
    } catch (error) {
        next(error);
    }
}

export async function getListing(req, res, next) {
    try {
        const listing = await Listing.findById(req.params.id);

        if (!listing) return next(errorHandler(404, 'Listing not found!'));

        res.status(200).json(listing);
    } catch (error) {
        next(error);
    }
}

//Search Functionality

export async function getListings(req, res, next) {
    try {
        const limit = parseInt(req.query.limit) || 9;
        const startIndex = parseInt(req.query.startIndex) || 0;

        let { offer, furnished, parking, type } = req.query;

        if (offer === undefined || offer === false) offer = { $in: [true, false] };

        if (furnished === undefined || furnished === false) furnished = { $in: [true, false] };

        if (parking === undefined || parking === false) parking = { $in: [true, false] };

        if (type === undefined || type === 'all') type = { $in: ['sale', 'rent'] };

        const searchTerm = req.query.searchTerm || '';

        const sort = req.query.sort || 'createdAt';

        const order = req.query.order || 'desc';

        const listings = await Listing.find({
            name: { $regex: searchTerm, $options: 'i' },
            offer,
            furnished,
            parking,
            type,
        })
            .sort({
                [sort]: order,
            })
            .limit(limit)
            .skip(startIndex);

        return res.status(200).json(listings);
    } catch (error) {
        next(error);
    }
}
