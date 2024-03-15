import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
            <form className='flex flex-col gap-4'>
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
                <button className='bg-gray-500 hover:bg-black text-white p-3 rounded-lg uppercase'>
                    Sign Up
                </button>
            </form>

            <div className='flex gap-2 mt-3'>
                <p>Have an account?</p>
                <Link to='/sign-in'>
                    <span className='text-blue-700'>Sign in</span>
                </Link>
            </div>
        </div>
    );
};

export default SignUp;
