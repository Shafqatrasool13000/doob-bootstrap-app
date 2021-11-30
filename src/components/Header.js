import React from "react";
import PicSide from "./PicSide";

const Header = (props) => {
    console.log(props.id);
    return (
        <>
            <div className={`container my-4 shadow-lg p-3 bg-body rounded header-left ${props.id}`}>
                <div className="d-flex row justify-content-start d-flex align-items-center">
                    <div className="col-lg-6">
                        <h1>The Spirit of  <br /> Digital Agency</h1>
                        <p>
                            Lorem, ipsum dolor. Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <button className="btn btn-col rounded-pill header-right">More About us</button>
                        <a href="/" className='fw-bold text-decoration-none ms-3'>Get in touch</a>
                    </div>
                    <div className="col-lg-6">
                        <PicSide img="./images/header.png" width='300px' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
