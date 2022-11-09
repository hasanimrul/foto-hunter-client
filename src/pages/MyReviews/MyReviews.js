import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServiceReview from '../Services/ServiceDetails/ServiceReview';
import MyReviewsTable from './MyReviewsTable';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])

    return (
        <div>
            <div className=" mb-10 mt-10 w-full ">
                <table className="table table-zebra w-full">
                    <thead className='w-full' >
                        <tr>
                            <th>Actions</th>
                            <th>Image</th>
                            <th >Name</th>
                            <th >Service Name</th>
                            <th >Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <MyReviewsTable
                                key={review._id}
                                review={review}
                            ></MyReviewsTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;