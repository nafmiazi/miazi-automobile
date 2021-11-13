import React from 'react';
import latest1 from '../../../images/Latest/latest1.jpg';
import latest2 from '../../../images/Latest/latest2.jpg';
import latest3 from '../../../images/Latest/latest3.jpg';
import latest4 from '../../../images/Latest/latest4.jpg';
import './LatestOffers.css';

const LatestOffers = () => {
    return (
        <div className="bg-white py-4 mb-5">
            <div className="container latest-section">
                <div className="text-center my-md-5">
                    <h1>LATEST OFFERS</h1>
                    <p>We announced some exciting offers on our very special Cars</p>
                </div>
                <div className="row latest">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                        <div className="row h-50 pb-lg-4">
                            <div className="col-12 card border-0 text-white mb-5 mb-lg-0">
                                <img src={latest1} className="w-100 h-100" alt="" />
                                <div className="card-img-overlay text-start ms-3">
                                    <h5 className="card-title">$<span className="text-warning">650</span>/month</h5>
                                    <p className="card-text">Toyota Prius</p>
                                </div>
                            </div>
                        </div>
                        <div className="row h-50">
                            <div className="col-6 card border-0 text-black mt-md-2 mt-lg-0">
                                <img src={latest3} className="w-100 h-100" alt="" />
                                <div className="card-img-overlay text-start ms-3">
                                    <h5 className="card-title">$<span className="text-warning">480</span>/month</h5>
                                    <p className="card-text">Lamborghini Huracan</p>
                                </div>
                            </div>
                            <div className="col-6 card border-0 text-black mt-md-2 mt-lg-0">
                                <img src={latest4} className="w-100 h-100" alt="" />
                                <div className="card-img-overlay text-start ms-3">
                                    <h5 className="card-title">$<span className="text-warning">740</span>/month</h5>
                                    <p className="card-text">Lamborghini</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-12 card border-0 text-white">
                                <img src={latest2} className="w-100" alt="" />
                                <div className="card-img-overlay text-start ms-3">
                                    <h5 className="card-title">$<span className="text-warning">950</span>/month</h5>
                                    <p className="card-text">Red Ferrari Car 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestOffers;