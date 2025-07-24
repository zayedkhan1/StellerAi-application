import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

const Home = () => {
    return (
        <>
            <div className='flex min-h-screen'>

                <Sidebar></Sidebar>
                <Main></Main>

            </div>

        </>
    );
};

export default Home;