import React from 'react';
import qouta from '../../../Assest/quote.svg'
import './Testimonial.css'
import img1 from '../../../Assest/Profile/people1.png'
import img3 from '../../../Assest/Profile/people3.png'
import img2 from '../../../Assest/Profile/people2.png'
import Reviews from './Reviews/Reviews';

const Testimonial = () => {


    const reveiws =[
        {id: 1, message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", name: "Winson Herry", img:img1 },
        {id: 2, message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", name: "Winson Herry", img:img2 },
        {id: 3, message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content", name: "Winson Herry", img:img3 },
    ]

    return (
        <div className='testimonialBox'>
            <div className="testimonialContent">
                <div className="topLet">
                    <h1 className='text-green-500 font-bold'>Testimonial</h1>
                    <h1 className='text-black font-bold text-lg text-2xl'>What Our Patients Says</h1>
                </div>
                <div className="imgTestimonial">
                    <img src={qouta} alt="" className='w-[200px] h-[150px]' />
                </div>
            </div>
            <div className="review grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {
                        reveiws.map(review => <Reviews key={review.id} review={review}></Reviews>)
                    }
            </div>
        </div>
    );
};

export default Testimonial;