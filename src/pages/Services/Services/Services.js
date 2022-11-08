import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:mx-48 md:my-20 gap-5 lg:mx-20 lg:my-20 mx-28 my-20'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }

            </div>
            <div className='text-center mb-20'>
                <Link to='/services' className='btn btn-primary capitalize'>See All Services</Link>
            </div>
        </div>
    );
};

export default Services;