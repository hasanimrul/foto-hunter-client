import React from 'react';
import { MdOutlineEdit, MdOutlineDeleteForever } from "react-icons/md";


const MyReviewsTable = ({ review }) => {
    const { reviewerName, photourl, message, serviceName } = review;

    const handleDelete = id => {

    }
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete()} className='btn btn-ghost'><MdOutlineDeleteForever /></button>
                </label>
                <label>
                    <button className='btn btn-ghost'><MdOutlineEdit /></button>
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
        </tr>
    );
};

export default MyReviewsTable;