import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';
import { BsFillBrightnessAltHighFill } from "react-icons/bs";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='md:mx-48 md:my-20  lg:mx-20 lg:my-20 mx-28 my-20'>
            <h2 className='text-4xl text-center'>Services</h2>
            <div className="divider text-4xl"><BsFillBrightnessAltHighFill /> </div>
            <div className='grid lg:grid-cols-3 gap-5'>

                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }

            </div>
            <div className='text-center my-20'>
                <Link to='/services' className='btn btn-primary capitalize'>See All Services</Link>
            </div>
        </div>
    );
};

export default Services;