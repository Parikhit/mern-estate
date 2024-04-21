const About = () => {
    return (
        <div className='p-6v mb-[500px]'>
            <h1 className='text-center text-3xl font-bold p-6'>About Imperial Properties:</h1>
            <p className='mt-20 w-4/5 mx-auto text-center'>
                Imperial Properties is a <span className='font-bold'>Full-Stack(MERN)</span> real
                estate project by <span className='text-rose-700 font-bold'>Parikhit Baruah</span>{' '}
                that showcases properties for rent and sale. This site also allows user to list
                their own property for sale/rent by signing into their own account. It also utilizes
                <span className='font-bold'> Advance Search Functionality</span> using which a user
                can filter through their search for any particular category. This website utilizes
                <span className='font-bold'>React</span> as the Frontend library,{' '}
                <span className='font-bold'>Redux-Toolkit</span> for state-management,{' '}
                <span className='font-bold'>Tailwind CSS </span>
                for styling and <span className='font-bold'>Node.js</span> and{' '}
                <span className='font-bold'>Express.js</span> for the backend. It is built with
                Advanced Authentication: <span className='font-bold'>Implement JWT, Firebase,</span>{' '}
                and <span className='font-bold'>Google OAuth</span> for secure and seamless user
                access. It utilizes Real-world CRUD Operations: Create, read, update, and delete
                property listings using <span className='font-bold'>MongoDB</span> as the database.{' '}
            </p>
        </div>
    );
};

export default About;
