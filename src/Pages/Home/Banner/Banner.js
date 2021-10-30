import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.jpg';
import banner2 from '../../../images/banner/banner-2.jpg';
import banner3 from '../../../images/banner/banner-3.jpg';

const Banner = () => {
    return (

        <Carousel className="mt-5 pb-3">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className="text-white bolder" >
                    <h3>STUNNING VIEWS OVER THE SOUTH COAST</h3>
                    <p>VIEWS</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className="text-white bold" >
                    <h3>OUR BEAUTIFULLY DESIGNED ROOMS</h3>
                    <p>ROOMS AND SUITES</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className="text-white bold" >
                    <h3>OUR BEAUTIFULLY DESIGNED FUNCTION ROOMS</h3>
                    <p>FUNCTIONS</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;