import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceReview from './ServiceReview';

const ServiceDetails = () => {

    const { title, img, price, reviews, description } = useLoaderData();


    return (
        <div className='break-words	'>
            <div className="card card-compact bg-gray-800 my-20 shadow-xl mx-20 md:mx-40 lg:mx-80">
                <figure >
                    <img src={img} className='w-fit md:w-fit md:h-80 lg:h-96' alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto text-white">{title}</h2>
                    <p className='text-orange-500 mx-auto'>Price: ${price}</p>
                    <p>{description}</p>
                </div>
            </div>

            <div className=" mb-10">
                <h2 className='text-5xl text-center'>Reviews</h2>
                <table className="table w-fit">
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Image</th>
                            <th >Name</th>
                            <th >Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ServiceReview
                                review={review}
                            ></ServiceReview>)
                        }
                    </tbody>
                </table>
            </div>
            <div >
                <textarea className="textarea textarea-bordered w-full ml-5" placeholder="Bio"></textarea>

                <button type='submit' className='btn btn-primary ml-5 mb-5'> Submit</button>
            </div>
        </div>
    );
};

export default ServiceDetails;