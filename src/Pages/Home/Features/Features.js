import React from 'react';
import './Features.css';
const Features = () => {
  return (
    <div className="container features mx-auto lg:my-20 lg:mb-32 mb-5">
      <h1 className="text-center lg:text-5xl font-bold my-6">Dental Service</h1>
      <div className=" grid lg:grid-cols-2 grid-cols-1">
        <div className="feImg">
          <img
            src="https://media.primeinc.org/images/courses/54WB229.jpg"
            alt=""
            className="h-80 bg-gray-500 aspect-video w-full"
          />
        </div>
        <div className=" featuresText bg-gray-50">
          <h3 className="lg:text-3xl text-lg font-bold">
            Exceptional Dental Care, on Your Terms
          </h3>
          <p className="my-6 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button>Get Start</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
