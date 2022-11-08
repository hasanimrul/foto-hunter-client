import React from 'react';

const ServiceReview = ({ review }) => {
    const { name, details, img } = review;

    const handleDelete = () => {

    };
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete()} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <img src={img} alt="" />
            </td>
            <td>
                <div className="font-bold">{name}</div>
            </td>
            <td >
                <p className=' '>{details}</p>
            </td>
            <th>
                {/* <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'pending'}
                    </button> */}
            </th>
        </tr>
    );
};

export default ServiceReview;