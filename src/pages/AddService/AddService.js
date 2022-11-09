import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const imageUrl = form.imageUrl.value;
        const message = form.message.value;

        const service = {
            title: title,
            price: price,
            img: imageUrl,
            description: message

        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Service added successfully!!!')
                }
            })
            .catch(er => console.error(er))
    }
    return (
        <div className='my-20'>
            <div><Toaster /></div>
            <form onSubmit={handleSubmit}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="title" type="text" placeholder="Service Title" className="input input-ghost w-full  input-success" required />
                    <input name="price" type="text" placeholder="Price" className="input input-ghost w-full  input-success" required />
                </div>
                <input name="imageUrl" type="text" placeholder="Image URL" className="input input-ghost w-full  input-success mb-5" required />
                <textarea name="message" className="textarea textarea-success  h-24 w-full" placeholder="Service description" required></textarea>

                <div className='text-center my-5'>
                    <input className='btn btn-outline btn-success  capitalize px-10' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddService;