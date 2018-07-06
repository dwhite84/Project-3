import React, { Component } from 'react';
import './Dashboard.css';
import profile_img from '../../img/profile_img.jpg';
import placeholder from '../../img/placeholder_200x200.png';

class HomePage extends Component {

    render () {
        return (
            <div className='container'>
                <div className='leftPanel'>
                    <div className='profileInfo'>
                        <img className='profileImg' src={profile_img} alt='Profile' />
                        <p>Walker Radez</p>
                        <p>walkerradez@gmail.com</p>
                    </div>
                    <div className='add'>
                        <button>Add a plan</button>
                    </div>
                </div>
                <div className='cardPanel'> 
                    <div className='card' >
                        <img src={placeholder} alt='Plan Card' />
                        <p>Title: </p>
                        <p>Dates: </p>
                    </div>
                    <div className='card' >
                        <img src={placeholder} alt='Plan Card' />
                        <p>Title: </p>
                        <p>Dates: </p>
                    </div>
                    <div className='card' >
                        <img src={placeholder} alt='Plan Card' />
                        <p>Title: </p>
                        <p>Dates: </p>
                    </div>
                    <div className='card' >
                        <img src={placeholder} alt='Plan Card' />
                        <p>Title: </p>
                        <p>Dates: </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;