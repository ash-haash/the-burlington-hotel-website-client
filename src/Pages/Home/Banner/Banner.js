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
                <Carousel.Caption className="text-primary bold" >
                    <h3>We’re here for you</h3>
                    <p>Helping you take control of your health and wellbeing.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className="text-primary bold" >
                    <h3>Help us help you get the treatment you need</h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className="text-primary bold" >
                    <h3>Your trust is our strength</h3>
                    <p>Your complete guide to conditions, symptoms and treatments, including what to do and when to get help.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;