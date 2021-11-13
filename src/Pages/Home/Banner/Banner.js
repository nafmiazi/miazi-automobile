import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banners/banner1.jpg';
import banner2 from '../../../images/banners/banner2.jpg';
import banner3 from '../../../images/banners/banner3.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item className="overlay">
                    <img className="d-block w-100" height="520px" src={banner1} alt="First slide"/>
                    <Carousel.Caption>
                        <div className="banner1 text-start p-5">
                            <h4>Get Ready to Drive Long</h4>
                            <h1 className="text-warning my-3">FIND YOUR DREAM CAR</h1>
                            <h4 className="my-3 my-md-0">A journey of a 1000 miles starts with a single step. Get ready to drive in your dream places. Your satisfication is our goal.</h4>
                            <Link to='/explore'>
                                <button className="btn btn-lg btn-outline-warning mt-md-3">Explore More</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className="overlay">
                    <img className="d-block w-100" height="520px" src={banner2} alt="Second slide"/>
                    <Carousel.Caption>
                        <div className="banner2 text-start p-5">
                            <h4>Enjoy The Driving With</h4>
                            <h1 className="text-info my-3">MIAZI AUTOMOBILE | The Name of Trust</h1>
                            <h4 className="my-3 my-md-0">A journey of a 1000 miles starts with a single step. Get ready to drive in your dream places. Your satisfication is our goal.</h4>
                            <Link to='/explore'>
                                <button className="btn btn-lg btn-outline-info mt-md-3">Explore More</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="overlay">
                    <img className="d-block w-100" height="520px" src={banner3} alt="Third slide"/>
                    <Carousel.Caption>
                        <div className="banner3 text-start p-5">
                            <h4>Hey Car Lovers Explore the</h4>
                            <h1 className="text-danger my-3">BEST PLACE FOR BUY CAR</h1>
                            <h4 className="my-3 my-md-0">A journey of a 1000 miles starts with a single step. Get ready to drive in your dream places. Your satisfication is our goal.</h4>
                            <Link to='/explore'>
                                <button className="btn btn-lg btn-outline-danger mt-md-3">Explore More</button>
                            </Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>   
        </>
    );
};

export default Banner;