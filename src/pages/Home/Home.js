import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-details'>
                <div><p>Start learning from home</p></div>
                <h1>Connect With Our Expert and <br /> start learning today</h1>
                <p>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                <Link to='/course'>
                    <button className='btn btn-primary fw-bold px-4 py-3'>Find Course</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;