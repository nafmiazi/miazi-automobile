import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Header/Navigation';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import Info from '../Info/Info';
import LatestOffers from '../LatestOffers/LatestOffers';
import UsersReview from '../UsersReview/UsersReview';

const Home = () => {
    const {isLoading} = useAuth();
    if(isLoading){
        return <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />
    }
    return (
        <div>
            <Info></Info>
            <Navigation></Navigation>
            <Banner></Banner>
            <Cars></Cars>
            <UsersReview></UsersReview>
            <LatestOffers></LatestOffers>
            <Footer></Footer>
        </div>
    );
};

export default Home;