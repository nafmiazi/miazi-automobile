import React from 'react';
import Rating from 'react-rating';

const UserReview = (params) => {
    const{name, review, rating} = params.userReview;

    return (
        <div className="cars-card col-md-6 col-lg-4 gy-4 gx-4">
            <div className="card border-0 mb-3">
                <h3 className="card-header bg-transparent border-0"><i className="fas fa-2x fa-bullhorn rounded-circle border border-warning p-3"></i></h3>
                <div className="card-body text-success">
                    <h5 className="card-title"><i className="fas fa-2x fa-quote-left"></i> {review.slice(0, 200)}... <i className="fas fa-2x fa-quote-right"></i></h5>
                    <h5 className="text-end text-primary">{name} says</h5>
                </div>
                <div className="card-footer bg-transparent border-0">
                    <Rating 
                        initialRating={rating}
                        emptySymbol="far fa-2x fa-star"
                        fullSymbol="fas fa-2x fa-star"
                        className="text-warning"
                        readonly>
                    </Rating>
                </div>
            </div>
        </div>
    );
};

export default UserReview;