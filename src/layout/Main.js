import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div className='body'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;