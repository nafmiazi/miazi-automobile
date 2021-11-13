import React from 'react';
import './Info.css';

const Info = () => {
    return (
        <div className="row m-0 info bg-warning text-light py-2">
            <div className="col-lg-6">
                <i className="fab fa-facebook-f me-3 icon-name"></i>
                <i className="fab fa-twitter me-3 icon-name"></i>
                <i className="fab fa-linkedin-in me-3 icon-name"></i>
                <i className="fab fa-pinterest-p me-3 icon-name"></i>
                <i className="fab fa-instagram icon-name"></i>
            </div>
            <div className="col-lg-6 icon-name">
                <span className="me-md-5">+1 828-376-0532</span>
                <span className="fw-bold">miaziautomobile@support.com</span>
            </div>
        </div>
    );
};

export default Info;