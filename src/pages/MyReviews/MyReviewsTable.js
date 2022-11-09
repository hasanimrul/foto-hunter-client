import React from 'react';
import { MdOutlineEdit, MdOutlineDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';


const MyReviewsTable = ({ review, handleDelete }) => {
    const { reviewerName, photourl, message, serviceName, _id } = review;


    return (
        <div>
            {<tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-ghost'><MdOutlineDeleteForever /></button>
                    </label>
                    <label>
                        <Link to={`/review/${_id}`} className='btn btn-ghost'><MdOutlineEdit /></Link>
                    </label>
                </th>

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
                <td>
                    <div className="font-bold">{serviceName}</div>
                </td>
                <td >
                    <p className=' '>"{message}"</p>
                </td>
                <td>

                </td>
            </tr>}
        </div>
    );
};

export default MyReviewsTable;