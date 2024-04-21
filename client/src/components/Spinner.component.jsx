import Loader from '../../public/Spinner.svg';

const Spinner = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <img
                src={Loader}
                alt='loading'
            />
        </div>
    );
};

export default Spinner;
