import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Services from '../../Services/Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    useTitle('Home');
    return (
        <div>

            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;