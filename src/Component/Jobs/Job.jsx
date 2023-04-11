import React from 'react';
import './Job.css'
import Button from 'react-bootstrap/Button';

const Job = (props) => {
    const {id,img,title,p,salary,location,btn} = props.job;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>{title}</h5>
            <h6>{p}</h6>
            <p>{salary}</p>
            <p>{location}</p>
            <Button href='/src/Details.html' variant="info">{btn}</Button>
            
        </div>
    );
};

export default Job;