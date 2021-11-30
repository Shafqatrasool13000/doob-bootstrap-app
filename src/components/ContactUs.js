import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div id='contact' className="container">
                <p className="fw-bold">Contact Us</p>
                <h1>Get in Touch</h1>
                <div className="row input-group mb-3">
                <div className="col-lg-6  mb-3">
                    <input type="text" className="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="col-lg-6  mb-3">
                    <input type="text" className="form-control" placeholder="Subject" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                    <input type="text" className="form-control mx-auto" placeholder="Message Here" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button className="btn btn-danger">Send Message</button>
            </div>
        </>
    )
}

export default ContactUs
