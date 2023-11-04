import React from 'react';
import { FcClock, FcVideoCall } from "react-icons/fc";
import { FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";
import './AvailableText.css'
const AvailableMeet = () => {
    return (
        <div className='container mx-auto'>

<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 py-10  px-8'>
            <div className="AvailableItems p-3">
                <FcClock className='Icon'/>
                <div className="AvailableText">
                    <h1>Opening Hours</h1>
                    <h2>Open 9:00 am to 5:00 pm</h2>
                </div>
            </div>
            <div className="AvailableItems p-3">
                <FaMapMarkerAlt className='Icon'/>
                <div className="AvailableText">
                    <h1>Location</h1>
                    <p>Chittagong Medical College Hospital</p>
                </div>
            </div>
            <div className="AvailableItems p-3">
                <FcVideoCall className='Icon'/>
                <div className="AvailableText">
                    <h1>Contact Now</h1>
                    <p>018XXXXXXXXXX</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AvailableMeet;