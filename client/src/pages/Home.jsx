import { useEffect, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';

const ListingItem = lazy(() => import('../components/ListingItem.component'));

import Spinner from '../components/Spinner.component';

import 'swiper/swiper-bundle.css';

const Home = () => {
    const [offerListings, setOfferListings] = useState([]);
    const [saleListings, setSaleListings] = useState([]);
    const [rentListings, setRentListings] = useState([]);
    SwiperCore.use([Navigation]);

    useEffect(() => {
        const fetchOfferListings = async () => {
            try {
                const res = await fetch('/api/listing/get?offer=true&limit=4');
                const data = await res.json();
                setOfferListings(data);
                fetchRentListings();
            } catch (error) {
                console.log(error);
            }
        };

        const fetchRentListings = async () => {
            try {
                const res = await fetch('/api/listing/get?type=rent&limit=4');
                const data = await res.json();
                setRentListings(data);
                fetchSaleListings();
            } catch (error) {
                console.log(error);
            }
        };

        const fetchSaleListings = async () => {
            try {
                const res = await fetch('/api/listing/get?type=sale&limit=4');
                const data = await res.json();
                setSaleListings(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchOfferListings();
    }, []);

    return (
        <>
            <div className='flex flex-col gap-6 p-12 max-w-5xl mx-auto'>
                <div className='bg-gray-100 text-center p-6 rounded-lg shadow-sm hover:shadow-md'>
                    <h1 className='text-black font-bold text-3xl lg:text-5xl'>
                        Building dreams, one home at a time.
                        <br />
                        Find your <span className='text-blue-900'>perfect </span>
                        home with <span className='text-blue-900'>Us</span>.
                    </h1>
                    <h1 className='mt-4 text-blue-900 text-md sm:text-lg'>
                        Imperial Properties is the best place to find your next perfect place to
                        live.
                        <br />
                        We have a wide range of properties for you to choose from.
                    </h1>
                </div>

                <Link
                    className='text-center w-[200px] text-sm sm:text-lg text-white font-semibold bg-slate-700 rounded-lg p-3 hover:scale-105 transition-transform shadow-lg'
                    to='/search'
                >
                    Let&apos;s get started...
                </Link>
            </div>

            <Swiper
                className='m-4 rounded-lg shadow-lg'
                navigation
            >
                {offerListings &&
                    offerListings.length > 0 &&
                    offerListings.map((listing) => {
                        const { _id, imageUrls } = listing;
                        return (
                            <SwiperSlide key={_id}>
                                <div
                                    style={{
                                        background: `url(${imageUrls[0]}) center no-repeat`,
                                        backgroundSize: 'cover',
                                    }}
                                    className='h-[500px]'
                                ></div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>

            <div className='w-9/10 mx-auto p-14 flex flex-col items-center gap-6'>
                {offerListings && offerListings.length > 0 && (
                    <div>
                        <h2 className='text-2xl font-semibold'>Recent Offers</h2>
                        <Link
                            className='text-base font-medium text-blue-900 hover:underline'
                            to='/search?offer=true'
                        >
                            Show More Offers
                        </Link>
                        <div className='flex flex-wrap gap-4'>
                            <Suspense fallback={<Spinner />}>
                                {offerListings.map((listing) => (
                                    <ListingItem
                                        listing={listing}
                                        key={listing._id}
                                    />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                )}

                {rentListings && rentListings.length > 0 && (
                    <div>
                        <h2 className='text-2xl font-semibold'>Recent Places for Rent</h2>
                        <Link
                            className='text-base font-medium text-blue-900 hover:underline'
                            to='/search?type=rent'
                        >
                            Show More Rent
                        </Link>
                        <div className='flex flex-wrap gap-4'>
                            <Suspense fallback={<Spinner />}>
                                {rentListings.map((listing) => (
                                    <ListingItem
                                        listing={listing}
                                        key={listing._id}
                                    />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                )}

                {saleListings && saleListings.length > 0 && (
                    <div>
                        <h2 className='text-2xl font-semibold'>Recent Places for Sale</h2>
                        <Link
                            className='text-base font-medium text-blue-900 hover:underline'
                            to='/search?type=sale'
                        >
                            Show More Sale
                        </Link>
                        <div className='flex flex-wrap gap-4'>
                            <Suspense fallback={<Spinner />}>
                                {saleListings.map((listing) => (
                                    <ListingItem
                                        listing={listing}
                                        key={listing._id}
                                    />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
