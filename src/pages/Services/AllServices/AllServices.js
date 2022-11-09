import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';
import { BsFillBrightnessAltHighFill } from "react-icons/bs";

const AllServices = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);
    return (
        <div>
            <img className='w-full md:h-96' src='https://bowvalleycollege.ca/-/media/bvc/student-resources/technology-services/images/technology-services.ashx' alt='' />
            <h2 className='text-4xl text-center mt-10'>Services</h2>
            <div className="divider text-4xl"><BsFillBrightnessAltHighFill /> </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 m-20'>
                {
                    allServices.map(service => <AllServicesCard
                        key={service._id}
                        service={service}
                    ></AllServicesCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;