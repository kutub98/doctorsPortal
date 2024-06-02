import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../doctorAnimation.json'),
      rendererSettings: {
        context: container, // the canvas context
        scaleMode: 'noScale',
        clearCanvas: false,
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
      },
    });
  }, []);
  return (
    <div className="container mx-auto px-8">
      <section className="bg-gray-100 text-gray-800 bannerSection px-8">
        <div className="container flex flex-col justify-center px-[8%] mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="lg:text-5xl text-5xl font-semibold text-gray-700">
              FOR YOU WITH YOU
            </h1>
            <p className="mt-6 mb-4  sm:mb-12 text-black font-bold text-3xl">
              We take care of your health{' '}
            </p>
            <p className="hidden md:inline text-black font-bold mb-4">
              {' '}
              <span className=" text-sky-400 font-bold text-xl ">
                Dr. Belal Hossain
              </span>{' '}
              is a specialist on medicine who giving treatment for long time who
              are suffering various Heath Problem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link className="px-8 py-3 text-lg font-semibold rounded bg-sky-500 text-gray-50">
                More Details
              </Link>
              <Link className="px-8 py-3 text-lg font-semibold text-black border rounded border-gray-800">
                Appointment
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <div
              className=" object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 LottieFiles"
              ref={container}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
