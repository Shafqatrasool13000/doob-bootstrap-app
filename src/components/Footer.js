import React from 'react'

const Footer = () => {
    return (
        <div className='container  text-white p-3 my-4 footer-box'>
            <h2 className='text-center'>Doob</h2>
            <h1 className='text-center text-capitalize'>creativity Above</h1>
            <div className="row d-flex align-items-center justify-content-center">
                <ul className='footer'>
                    <li>Home.</li>
                    <li>Key Features.</li>
                    <li>Terminal.</li>
                    <li>pricing.</li>
                    <li>FAQ.</li>
                </ul>
                <ul className='footer icons-footer'>
                    <li><i className="fab fa-facebook-f fontawesome-icon"></i></li>
                    <li><i className="fab fa-facebook-f fontawesome-icon"></i></li>
                    <li><i className="fab fa-facebook-f fontawesome-icon"></i></li>
                    <li><i className="fab fa-facebook-f fontawesome-icon"></i></li>
                </ul>
            </div>

            <p className='text-center'>Copyright© Arifur Rahman Tushar 2021. All rights reserved</p>
        </div>
    )
}

export default Footer
