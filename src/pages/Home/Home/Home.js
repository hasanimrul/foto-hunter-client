import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Services from '../../Services/Services/Services';
import AboutMe from '../AboutMe/AboutMe';
import Slider from '../Slider/Slider';
import Specialities from '../Specialities/Specialities';

const Home = () => {
    useTitle('Home');
    return (
        <div>

            <Slider></Slider>
            <Services></Services>
            <Specialities></Specialities>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;