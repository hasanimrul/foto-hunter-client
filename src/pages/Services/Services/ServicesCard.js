import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { title, img, price, rating, description, _id } = service;
    return (
        <div className="card w-fit bg-gray-800">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-full md:h-48" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white mx-auto">{title}</h2>
                <p className='text-gray-400'>{description.slice(0, 100)}...</p>
                <div className='flex justify-between'>
                    <p className='text-orange-500'>Price: ${price}</p>
                    <p className='text-white items-end'>Rating: <span className='bg-gray-700 px-1 rounded'>{rating}</span></p>
                </div>
                <div className="card-actions mx-auto mt-3">
                    <Link to={`/service/${_id}`} className="btn btn-primary capitalize">See Details</Link>
                </div>
            </div>

        </div>
    );
};

export default ServicesCard;