import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ServiceReview from './ServiceReview';

const ServiceDetails = () => {

    const { _id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const photourl = user?.photoURL;
        const message = form.message.value;
        console.log(name);

        const review = {
            service: _id,
            serviceName: title,
            reviewerName: name,
            email,
            photourl,
            message

        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('Review added successfully!!!')
                }
            })
            .catch(er => console.error(er))
    }
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])

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

            {/* review showing ui */}

            <div className=" mb-10 w-full">
                <h2 className='text-3xl mb-4 text-center'>Review of {title}</h2>
                <table className="table table-zebra w-full">
                    <thead className='w-full' >
                        <tr>
                            <th></th>
                            <th >Name</th>
                            <th >Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ServiceReview
                                key={review._id}
                                review={review}
                            ></ServiceReview>)
                        }
                    </tbody>
                </table>
            </div>

            {/* review add section */}

            <div>
                {user?.email ?
                    <form onSubmit={handleSubmit} >
                        <h2 className="text-4xl mb-3">You are about to review "{title}"</h2>
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
                        <textarea name="message" className="textarea textarea-bordered textarea-success h-24 w-full my-4" placeholder="Your Review" required></textarea>

                        <div className='text-center'>
                            <input className='btn btn-outline btn-success mb-5 capitalize' type="submit" value="Submit" />
                        </div>
                    </form>
                    :
                    <p className='text-3xl text-center my-5'>Please <Link to='/login' className='text-blue-600'>login</Link> to add a review!!!</p>
                }
            </div>


        </div>
    );
};

export default ServiceDetails;