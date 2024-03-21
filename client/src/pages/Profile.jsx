import { useSelector } from 'react-redux';

const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-8'>Profile</h1>

            <form className='flex flex-col gap-4'>
                <img
                    src={currentUser.avatar}
                    alt='profile-img'
                    className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
                />

                <input
                    type='text'
                    placeholder='Username'
                    className='border p-3 rounded-lg'
                    id='username'
                />
                <input
                    type='email'
                    placeholder='Email'
                    className='border p-3 rounded-lg'
                    id='email'
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='border p-3 rounded-lg'
                    id='password'
                />

                <button className='bg-black text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-60'>
                    Update
                </button>
            </form>

            <div className='flex justify-between mt-5'>
                <span className='text-red-700 text-lg cursor-pointer'>Delete Account</span>
                <span className='text-red-700 text-lg cursor-pointer'>Sign Out</span>
            </div>
        </div>
    );
};

export default Profile;
