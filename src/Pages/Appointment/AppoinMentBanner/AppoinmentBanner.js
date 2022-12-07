import Lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import './AppoinMentBanner.css'

const AppoinmentBanner = ({selected, setSelected}) => {
  // const [selected, setSelected] = React.useState(new Date());

  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   footer = <p>You picked {format(selected, "PPPPpppp")}.</p>;
  // }


 
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../appoinment.json"),
      rendererSettings: {
        context: container, // the canvas context
        scaleMode: "noScale",
        clearCanvas: false,
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
      },
    });
  }, []);
  return (
    <section className="px-[10%] bg">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center ">
        
          <div className=" h-[350px] bg-slate-300 relative items-center">
            <DayPicker
            mode="single" 
            selected={selected} 
            onSelect={setSelected}/>
          </div>
       
        <div className="items-center">
          <div className="LottieFiles" ref={container}></div>
        </div>
      </div>
    </section>
  );
};

export default AppoinmentBanner;
