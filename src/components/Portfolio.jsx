import React from 'react'
import PortfolioApi from '../api/PortfolioApi'

const Portfolio = () => {
    const Card=()=>{
        return (<div className="card" style={{width: "18rem"}}>
        <img src="./images/portfolio.png" className="card-img-top " alt="..."/>
        
      </div>)
    }
    return (
        <div id='portfolio' className="container my-5 text-center">
        <h1 className='text-lg-start my-3'>See some of our <br /> Creative Work</h1>
            <div className="row">
                {PortfolioApi.map((curE,i) => {
                    return (
                        <div className="col-lg-4" key={i}>
                        <Card/>
                        </div>)
                })}
            </div>
        </div>
    )
}
export default Portfolio
