import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');

        if (searchTermFromUrl) setSearchTerm(searchTermFromUrl);
    }, [location.search]);

    return (
        <header className='bg-gray-200 shadow-md h-32 sm:h-28'>
            <div className=' flex items-center justify-between max-w-6xl mx-auto p-3 sm:p-6'>
                <div className='flex items-center gap-2'>
                    <Link to='/'>
                        <img
                            className='rounded-2xl w-16 h-16'
                            src='logo.jpeg'
                            alt='logo'
                        />
                    </Link>

                    <h1 className='text-xl font-medium sm:text-3xl w-fit flex flex-wrap'>
                        <span className='text-white bg-slate-950 px-2 py-1 rounded-l-md'>
                            Imperial{' '}
                        </span>
                        <span className='text-zinc-800 bg-slate-50 px-2 py-1 rounded-r-md'>
                            Properties
                        </span>
                    </h1>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className='bg-white p-2 sm:p-3 rounded-lg flex items-center'
                >
                    <input
                        type='text'
                        placeholder='Search...'
                        className='bg-transparent focus:outline-none w-24 sm:w-36 md:w-64'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>
                        <FaSearch className='text-gray-600' />
                    </button>
                </form>

                <ul className='flex items-center mx-2 gap-4 font-medium'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-slate-500 hover:text-black hover:animate-pulse'>
                            Home
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-slate-500 hover:text-black hover:animate-pulse'>
                            About
                        </li>
                    </Link>
                    <Link to='/profile'>
                        {currentUser ? (
                            <img
                                className='rounded-full h-14 object-cover'
                                src={currentUser.avatar}
                                alt='profile-img'
                            />
                        ) : (
                            <li className='text-slate-500 hover:text-black hover:animate-pulse'>
                                Sign In
                            </li>
                        )}
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
