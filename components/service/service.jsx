import React from 'react'
import './service.css'

const Service = () => {
    return (
        <div className='service'>
            <h2>Services</h2>
            <div className='items'>
                <div className='item graphic'>
                    <img src="./graphic.png" alt="Graphic Design" />
                    <h3>Graphic<br /> Design</h3>
                </div>
                <div className='item web'>
                    <img src="./web.png" alt="wb" />
                    <h3>Graphic<br /> Design</h3>
                </div>
                <div className='item ui'>
                    <img src="./ui.png" alt="ui" />
                    <h3>Graphic<br /> Design</h3>
                </div>
            </div>
        </div>
    )
}

export default Service;