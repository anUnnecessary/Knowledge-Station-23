import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CloserSection from './Component/CloserSection/CloserSection';
import JobSection from './Component/JobSection/JobSection';
import FeaturedSection from './Component/FeaturedSection/FeaturedSection';
import Dashboard from './Component/Dashboard/Dashboard';



function App() {
  const [count, setCount] = useState(0)

  return (
    // navbar section
    <div>
      <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Knowledge Station 23</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home"><span className="bg-info">Statistics</span></Nav.Link>
            <Nav.Link href="/src/answers.html">Blogs</Nav.Link>
            <Nav.Link href="#pricing">Applied Jobs</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      </>
    <CloserSection></CloserSection>
    <JobSection></JobSection>
    <FeaturedSection></FeaturedSection>
    <Dashboard></Dashboard>
    </div>

  )
}

export default App
