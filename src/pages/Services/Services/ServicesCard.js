import React from 'react';
import { Link } from 'react-router-dom';
import { ImStarFull } from "react-icons/im";

const ServicesCard = ({ service }) => {
    const { title, img, price, description, _id } = service;
    return (
        <div className="card w-fit bg-gray-800">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-full md:h-48" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <div className='flex justify-between my-5' >
                    <p className='text-orange-500'>Price: ${price}</p>
                    <p className='text-yellow-300 flex items-center'> <ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /> <span className='bg-gray-700 px-1 text-white rounded ml-2'>5.0</span></p>
                </div>
                <p className='text-gray-400'>{description.slice(0, 100)}...</p>
                <div className="card-actions mx-auto mt-3">
                    <Link to={`/service/${_id}`} className="btn btn-primary capitalize">See Details</Link>
                </div>
            </div>

        </div>
    );
};

export default ServicesCard;