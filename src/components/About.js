import React from 'react'
import PicSide from './PicSide'


const About = () => {
    return (
        <>
            <div id='about' className="container my-4 shadow-lg p-3  bg-body rounded about-us">
                <div className="d-flex row justify-content-start d-flex align-items-center">
                <div className="col-lg-6">
                        <PicSide img="./images/about.png" width='300px' />
                    </div>
                    <div className="col-lg-6">
                    <p className='fw-bold text-danger'>OUR COMPANY</p>
                        <h1>Some Fine <br /> Words About Us</h1>
                        <p>
                            Lorem, ipsum dolor. Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia incidunt iure.
                        </p>
                      <p>&#8592;&#8594;</p>
                    </div>
                    
                </div>
            </div>
        </>
            
        
    )
}

export default About
