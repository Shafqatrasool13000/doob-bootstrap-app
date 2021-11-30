import React from 'react'
import ServicesApi from '../api/ServicesApi'

const Anything = () => {
    return (
            <div className="container my-5 jackpot-features">
                <div className="row">
                <div className="col-lg-4">
                <h1>Anything you  need,we 've got you covered</h1>
                <button className="btn btn-danger mt-3 rounded-pill services">Get in Touch</button>
                </div>
                    {ServicesApi.map((curE,i) => {
                        return (<div className="col-lg-4 " key={i}>
                            <img src={curE.img} className='img-fluid' alt="Network" />
                            <p className='fw-bold my-4'>{curE.title}</p>
                            <p>{curE.subtitle}</p>
                        </div>)
                    })}
                </div>
        </div>
    )
}

export default Anything
