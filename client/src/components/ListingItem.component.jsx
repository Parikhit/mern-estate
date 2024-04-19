import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MdLocationOn } from 'react-icons/md';

const ListingItem = ({ listing }) => {
    const {
        _id,
        imageUrls,
        name,
        address,
        description,
        offer,
        discountedPrice,
        regularPrice,
        bedrooms,
        bathrooms,
    } = listing;
    return (
        <div className='p-4 bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
            <Link to={`/listing/${_id}`}>
                <img
                    src={imageUrls[0]}
                    alt='listing-cover'
                    className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-transform duration-300'
                />
                <div className='p-3 flex flex-col gap-2 w-full mt-2'>
                    <p className='text-lg font-semibold text-slate-700 truncate'>{name}</p>
                    <div className=''></div>
                </div>
                <div className='flex items-center gap-1'>
                    <MdLocationOn className='h-4 w-4 text-green-700' />
                    <p className='text-sm text-gray-700 truncate w-full'>{address}</p>
                </div>
                <p className='text-sm text-gray-700 line-clamp-2'>{description}</p>
                <p className='text-slate-700 mt-2 font-semibold'>
                    &#8377;
                    {offer
                        ? discountedPrice.toLocaleString('en-US')
                        : regularPrice.toLocaleString('en-US')}
                    {discountedPrice ? ' OFF' : ' /month'}
                </p>

                <div className='flex gap-4 text-slate-700 mt-2'>
                    <div className='font-bold text-xs'>
                        {bedrooms > 1 ? `${bedrooms} beds` : `${bedrooms} bed`}
                    </div>
                    <div className='font-bold text-xs'>
                        {bathrooms > 1 ? `${bathrooms} bathrooms` : `${bathrooms} bathroom`}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ListingItem;

ListingItem.propTypes = {
    listing: PropTypes.object,
};
