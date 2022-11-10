import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewsTable from './MyReviewsTable';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('MyReviews');


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Successfully deleted!');
                        const remaining = reviews.filter(rview => rview._id !== id);
                        setReviews(remaining)
                    }
                })
        }
    };

    return (
        <div>
            <div><Toaster /></div>
            {reviews?.length > 0 ?
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
                                    handleDelete={handleDelete}
                                ></MyReviewsTable>)
                            }
                        </tbody>
                    </table>
                </div>
                :
                <h2 className='text-4xl text-center my-28'>No review available to show!!!</h2>
            }
        </div>
    );
};

export default MyReviews;