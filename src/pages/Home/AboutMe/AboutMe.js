import React from 'react';
import img from '../../../assets/about1.jpg'

const AboutMe = () => {
    return (
        <div >
            <h2 className='text-center text-3xl my-10'>A LITLE ABOUT ME</h2>
            <div className='grid md:grid-cols-2 mx-14 my-20'>

                <div className='flex gap-8'>
                    <img className='flex-1 h-60' src={img} alt='' />
                    <div className='flex-1'>
                        <h2 className='text-lg'>
                            Tomorrow the land will be followed by a pure sitor, but until then I hate him.
                        </h2>
                        <p className='text-sm'>Chatterbox flatters the time of the airline. Wills and undertakings are softened by the comfort of mourning. Chatterbox flatters the time of the airline. The lion of Morbi laughs, the gate and the chase, and the vestibule and the eros. It's always legal. With companions born and bred and great patrons. Until the ullamcorper there is no fear of the author fringilla. Tomorrow is just hate, protein. Aeneas lacinia should not be drunk.</p>
                    </div>
                </div>


                <div>
                    <h2 className='text-center sm:my-10 mb-10'>My Skills</h2>
                    <div className='flex gap-5 justify-center items-center'>
                        <div>
                            <p>Photoshop</p>
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70 }}>70%</div>
                        </div>
                        <div>
                            <p>Final Cut</p>
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 85 }}>85%</div>
                        </div>

                        <div>
                            <p>Photography</p>
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 100 }}>100%</div>
                        </div>
                        <div>
                            <p>Motion video</p>
                            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 80 }}>80%</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;