import React from 'react';
import AboutBelal from '../AboutBelal/AboutBelal';
import AvailableMeet from '../AvailableMeet/AvailableMeet';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Features from '../Features/Features';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AvailableMeet></AvailableMeet>
           <Services></Services>
           <Features></Features>
           <AboutBelal></AboutBelal>
           <Testimonial></Testimonial>
           <ContactForm></ContactForm>
        </div>
    );
};

export default Home;