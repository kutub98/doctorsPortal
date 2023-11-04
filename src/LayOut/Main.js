import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
           <div className=' sticky top-0 w-full z-50'>
           <Header></Header>
           </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;