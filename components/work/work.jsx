import React from 'react'
import './work.css';

const Work = () => {
    return (
        <div className='work'>
            <h2>Works</h2>
            <div className="slide">
                <div className="item1">
                    <img src='./1.png' about='1' />
                    <p>Mobile App UI Design</p>
                </div>
                <div className="item1">
                    <img src='./2.png' about='2' />
                    <p>Website Design</p>
                </div>
            </div>
        </div>
    )
}

export default Work;