import React, { useEffect, useState } from 'react';
import './FeaturedSection.css'
import Job from '../Jobs/Job';

const FeaturedSection = () => {

    const [jobs, setJobs] = useState([]);


    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=> res.json())
        .then(data => setJobs(data))
    },[])

    
    return (


        <div>
            <h1 className='featured-h'>Featured Job</h1>
            <p className='featured-p'>Explore thousands of job opportunities with all the information you need. Its your future</p>

         <div className='job-container'>
         {
                jobs.map(job => <Job
                key={job.id}
                job ={job}>

                </Job>)
            }

         </div>
        </div>
    );
};

export default FeaturedSection;