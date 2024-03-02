// BannedPage.js
import React from 'react';

const BannedPage = () => {
    return (
        <div className='lg:flex justify-center inline-block lg:ml-64 ml-0 mt-24'>
            <div className='lg:grid lg:justify-normal flex justify-center'>
                <img className='lg:w-[400px] w-[200px] lg:justify-normal justify-center' src="https://media0.giphy.com/media/xThtacRVViGGC9K5JC/giphy.gif?cid=6c09b9525hmznjjm757ma2ucy2thfi20mi8go48zjb06he1z&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" />
            </div>
            <div className="container mx-auto mt-8 text-center">

                <h2 className="lg:text-7xl md:text-5xl text-3xl font-bold mb-4">Temporary Ban</h2>
                <div className='lg:text-4xl md:text-4xl text-xl'>
                    <p>You are temporarily banned for 10 minutes due to too many wrong login attempts.</p>
                    <p>Please wait and try again later.</p>
                </div>
            </div>
        </div>
    );
};

export default BannedPage;
