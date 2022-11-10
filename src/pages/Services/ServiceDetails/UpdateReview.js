import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const UpdateReview = () => {
    const { user } = useContext(AuthContext);
    const storedReview = useLoaderData();

    const [review, setReview] = useState(storedReview)


    const handleUpdateReview = event => {
        event.preventDefault();
        fetch(`https://foto-hunter-server.vercel.app/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review updated successfully')
                }

            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <div className='my-20'>
            <div><Toaster /></div>
            <h2 className='text-xl my-5'>Update <span className='text-orange-500'>{user?.displayName}'s</span> review here. </h2>
            <form onSubmit={handleUpdateReview} >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <label>
                        Name:
                        <input name="name" type="text" placeholder="Name" defaultValue={user?.displayName} className="input input-ghost w-full  input-bordered" readOnly required />
                    </label>

                    <label>
                        Email Address:
                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    </label>


                </div>
                <label>
                    PhotoURL:
                    <input name="photourl" type="text" placeholder="photourl" defaultValue={user?.photoURL} className="input input-ghost w-full  input-bordered" readOnly />
                </label>
                <textarea onChange={handleInputChange} name="message" className="textarea textarea-bordered textarea-success h-24 w-full my-4" defaultValue={review.message} placeholder="Your Review" required></textarea>

                <div className='text-center'>
                    <input className='btn btn-outline btn-success mb-5 capitalize' type="submit" value="Update Review" />
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;