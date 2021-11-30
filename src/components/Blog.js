import React from 'react'
import BlogsApi from '../api/BlogsApi'

const Blog = () => {
    const Card = (props) => {
        const{title,date,description}=props.data
        return (
            <div className="card bg-danger" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>{date}</p>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        )
    }
    return (
        <>
            <div id='blog' className="container my-5 text-center blog-container">
                <div className='text-lg-start'>
                    <p>Blog Stories</p>
                    <h3 className='text-lg-start my-3'>Check Our News</h3>
                </div>
                <div className="row ">
                    {BlogsApi.map((curE, i) => {
                        return (
                            <div className="col-lg-4 text-light blogs" key={i}>
                                <Card data={curE} />
                            </div>)
                    })}
                </div>

            </div>
        </>
    )
}
export default Blog
