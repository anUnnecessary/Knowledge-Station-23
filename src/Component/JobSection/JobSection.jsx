import React from 'react';
import './JobSection.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const JobSection = () => {
    return (
        <div>
            <h1 className='jobSec'>Job Category List</h1>
            <p className='sec1'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            

            {/* card section */}
            <div>
            <CardGroup>
      <Card>
        <Card.Img style={{width: '75px'}} variant="top" src="/assets/Icons/accounts 1.png" />
        <Card.Body>
          <Card.Title>Account & Finance</Card.Title>
          <Card.Text>300 Jobs Available
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img style={{width: '75px'}} variant="top" src="/assets/Icons/chip 1.png" />
        <Card.Body>
          <Card.Title>Creative Design</Card.Title>
          <Card.Text>
          100+ Jobs Available
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img style={{width: '75px'}} variant="top" src="/assets/Icons/business 1.png" />
        <Card.Body>
          <Card.Title>Marketing & Sales</Card.Title>
          <Card.Text>
          150 Jobs Available
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img style={{width: '75px'}} variant="top" src="/assets/Icons/social-media 1.png" />
        <Card.Body>
          <Card.Title>Engineering Job</Card.Title>
          <Card.Text>
          224 Jobs Available
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
            </div>
        </div>
    );
};

export default JobSection;