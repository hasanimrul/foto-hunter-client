import React from 'react';

const Slider = () => {
    return (
        <div className="carousel w-full max-h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://camerajabber.com/wp-content/uploads/2017/12/SportsPhotographyTips.jpg" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://rodmclean.com/wp-content/uploads/2019/06/Athletes-Soccer-Football-Bicycle-kick-Kai-Sports-Advertising-Photographer-Rod-McLean-CP-G.jpg" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://trip-hiroshima.com/wp-content/uploads/2020/09/sport.jpg" className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;