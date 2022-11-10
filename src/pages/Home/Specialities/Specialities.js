import React from 'react';
import img1 from '../../../assets/s1.jpg'
import img2 from '../../../assets/s2.jpg'
import img3 from '../../../assets/s3.jpg'

const Specialities = () => {
    return (
        <div>
            <h2 className='text-2xl text-center my-10'>My Specialities</h2>
            <div className='grid md:grid-cols-3 md:mx-20 gap-8 mb-28'>
                <div>
                    <div className="card card-compact w-full pb-8 bg-gray-800 shadow-xl">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Landscape</h2>
                            <p className='mx-auto'>Chatterbox flatters the time of the airline. It was a good thing that the two soft projects were soft.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact w-full pb-8 bg-gray-800 shadow-xl">
                        <figure><img src={img2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Advertorial</h2>
                            <p className='mx-auto'>Until then, he does not need to be afraid of pregnancy. Even the gateway to the grid is expected to be large.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact w-full pb-8 bg-gray-800 shadow-xl">
                        <figure><img src={img3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Conceptual</h2>
                            <p className='mx-auto'>Maecenas has a soft palate at times. Morbid laughter is the door and will be followed, the vestibule ground.</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Specialities;