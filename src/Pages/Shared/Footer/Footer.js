import React from 'react';
import './Footer.css';
import logo from '../../../images/logo2.png';

const Footer = () => {
    // Display Footer section
    return (
       <>
            <div className="row custom-footer m-0 p-5 pb-3">
                <div className="col-lg-5 text-start p-3 pt-2">
                    <img src={logo} width="150px" className="me-2 mb-4 title" alt=""/>
                    <p className="mb-4">Miazi Automobile is a trusted name in Automobile Service, who is always at your side and your satisfaction is our first priority.  We believe in your happiness not in over profit.Stay With Us.</p>
                    <h6>Follow Us On</h6>
                    <div>
                        <i className="fab fa-facebook-f me-3 text-warning"></i>
                        <i className="fab fa-twitter me-3 text-warning"></i>
                        <i className="fab fa-linkedin-in me-3 text-warning"></i>
                        <i className="fab fa-pinterest-p me-3 text-warning"></i>
                        <i className="fab fa-instagram text-warning"></i>
                    </div>
                </div>
                <div className="col-lg-3 text-start">
                    <h4 className="text-warning mb-4">Best Collection To Explore</h4>
                    <p>Lamborghini 2021</p>
                    <p>Ferrari 2019</p>
                    <p>BMW E46 M3</p>
                    <p>Volkswagen 2016</p>
                    <p>Porsche Cayen</p>
                    <p>BMW E56 P3</p>
                    <p>Ferrari 2019</p>
                </div>
                <div className="col-lg-4 text-start">
                    <h4 className="text-warning mb-4 ms-md-3">Contact Us</h4>
                    <h6 className="lh-lg"><i className="fas fa-map-marker-alt ms-3 text-warning"></i> 250/A, O R Nezam Road, GEC Moor, Chattogram.</h6>
                    <h6 className="lh-lg"><i className="fas fa-envelope ms-3 text-warning"></i> naf71bd@gmail.com </h6>
                    <h6 className="lh-lg"><i className="fas fa-phone-alt ms-3 text-warning"></i> +88 012345 6789 </h6>
                    <h6 className="mt-3 text-warning ms-md-3">Feel free to contact with us</h6>
                </div>
            </div>
            <h6 className="text-center bg-warning py-3 mb-0">Copyright <i className="far fa-copyright"></i> 2021 Nurul Afsar Fahim</h6>
       </>
    );
};

export default Footer;