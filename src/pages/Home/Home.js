import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-details'>
                <h1 className='heading'>Connect With Our Expert and <br /> start learning today</h1>
                <p>A JavaScript framework is a collection of pre-written code built to support applications and <br /> provide benefits that plain JavaScript does not offer on its own.</p>
                <Link to='/course'>
                    <button className='btn btn-primary fw-bold px-4 py-3'>Find Course</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;