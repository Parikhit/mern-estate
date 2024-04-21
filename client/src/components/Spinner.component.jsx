import Loader from '../assets/spinner.svg';

const Spinner = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <img
                src={Loader}
                alt='loading'
            />
        </div>
    );
};

export default Spinner;
