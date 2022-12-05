import React from 'react';
import './AboutBelal.css'
import profile from '../../../Assest/Profile/belal.png'
import PrimaryButton from '../../PrimaryButton/PrimaryButton'
const AboutBelal = () => {
    return (
        <div>
            <div className="drBelal">
                <div className="img w-1/2 hidden lg:block">
                    <img src={profile} alt="" />
                </div>
                <div className="informationOfBelal sm:w-full w-1/2">
                <h1 className='text-green-400'>Appointment</h1>
                <h1 className='text-white font-bold '>Make an appointment Today</h1>
                <p className='text-white my-5 text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton className="mt-4">Make A Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AboutBelal;