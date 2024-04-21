import { FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='mt-12 mx-auto max-w-3xl w-fit flex-col gap-2 pb-9'>
            <div className='flex items-center justify-center gap-2 text-lg'>
                <h1>Made with ❤️ using </h1>
                <div className='flex gap-2'>
                    <DiMongodb
                        size={30}
                        className='hover:scale-125'
                        style={{ color: 'green' }}
                    />
                    <SiExpress
                        size={30}
                        className='hover:scale-125'
                    />
                    <FaReact
                        size={30}
                        className='hover:scale-125'
                        style={{ color: ' #61DBFB' }}
                    />
                    <FaNodeJs
                        size={30}
                        className='hover:scale-125'
                        style={{ color: 'green' }}
                    />
                </div>
            </div>
            <div className='flex items-center justify-center gap-2'>
                Copyright &#9400; {year}{' '}
                <span className='text-rose-700 font-semibold'> Parikhit Baruah</span>
            </div>
        </footer>
    );
};

export default Footer;
