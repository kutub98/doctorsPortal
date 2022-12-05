import React, { useState } from 'react';
import AppoinmentBanner from './AppoinMentBanner/AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment/AvailableAppoinment';

const Appointments = () => {
    const [selected, setSelected] = React.useState(new Date());
    
    return (
        <div>
           <AppoinmentBanner selected={selected} setSelected={setSelected}></AppoinmentBanner>
           <AvailableAppoinment selected={selected} setSelected={setSelected} ></AvailableAppoinment>
        </div>
    );
};

export default Appointments;