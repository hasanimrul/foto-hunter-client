import React from 'react';

const ServiceReview = ({ review }) => {
    const { reviewerName, message, photourl } = review;


    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photourl} alt='' />
                    </div>
                </div>

            </td>
            <td>
                <div className="font-bold">{reviewerName}</div>
            </td>
            <td >
                <p className=' '>{message}</p>
            </td>
            <td>

            </td>
        </tr>
    );
};

export default ServiceReview;