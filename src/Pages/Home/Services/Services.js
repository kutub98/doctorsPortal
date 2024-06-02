import React from 'react';
import SingleService from './SingleService/SingleService';
import './Services.css';

const Services = () => {
  const ourServices = [
    {
      id: 1,
      name: 'medicine treatment',
      img: 'https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
    },

    {
      id: 2,
      name: 'Diabetes treatment',
      img: 'https://img.freepik.com/fotos-premium/inscripcion-dia-mundial-diabetes-manos-mujeres-sostienen-circulo-azul-sobre-fondo-azul-14-noviembre_533125-847.jpg?w=2000',
    },

    {
      id: 3,
      name: 'Arthritis treatment',
      img: 'https://www.homage.sg/wp-content/uploads/2021/01/bigstock-Closeup-Of-Female-Arms-Holding-281279137.jpg',
    },

    {
      id: 4,
      name: 'Alergy treatment',
      img: 'https://mavcure.com/wp-content/uploads/2017/09/Laundry-Detergents-Allergic-Reactions-SymptomsCausesTreatment.jpg',
    },
    {
      id: 5,
      name: 'And children specialist ',
      img: 'https://www.finddoctor24.com/wp-content/uploads/2017/12/Child-Specialist.jpg',
    },
  ];
  return (
    <div>
      <div className="services container mx-auto px-10 py-10 text-center ">
        <h1 className="text-2xl font-semibold text-sky-700 mb-3">
          How I Will Take care of you
        </h1>
        <h1 className="mb-10 lg:text-5xl  md:text-6xl sm:text-1xl font-semibold text-black">
          My treatments
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-7">
          {ourServices.map(service => (
            <SingleService key={service.id} service={service}></SingleService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
