import React from 'react';
import './CloserSection.css'
import Button from 'react-bootstrap/Button';

const CloserSection = () => {
    return (
        <div>
            <div>
            <h1>One Step Closer To Your <span className='bg-info'>Dream Job</span></h1>
            <Button variant="primary" size="lg">
          Get Started
        </Button>{' '}
            </div>
            <section className='secClose'>
                <img className='img' src="/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
            </section>
        </div>


    );
};

export default CloserSection;