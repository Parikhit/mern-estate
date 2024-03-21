import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <header className='bg-gray-200 shadow-md'>
            <div className=' flex items-center justify-between max-w-6xl mx-auto p-6'>
                <Link to='/'>
                    <h1 className='text-2xl font-medium sm:text-3xl w-fit flex flex-wrap'>
                        <span className='text-white bg-slate-950 px-2 py-1 rounded-l-md'>
                            Imperial{' '}
                        </span>
                        <span className='text-zinc-800 bg-slate-50 px-2 py-1 rounded-r-md'>
                            Properties
                        </span>
                    </h1>
                </Link>

                <form className='bg-white p-2 sm:p-3 rounded-lg flex items-center'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='bg-transparent focus:outline-none w-24 sm:w-36 md:w-64'
                    />
                    <FaSearch className='text-gray-600' />
                </form>

                <ul className='flex mx-2 gap-4 font-medium'>
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
                                className='rounded-full h-12 w-12 object-cover'
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
