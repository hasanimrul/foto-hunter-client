import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 m-20'>
            {
                allServices.map(service => <AllServicesCard
                    key={service._id}
                    service={service}
                ></AllServicesCard>)
            }
        </div>
    );
};

export default AllServices;