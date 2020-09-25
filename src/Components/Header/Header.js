import React, { useContext } from 'react';
import logo from '../../Logo.png';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CoxsBazar from '../../Image/CoxsBazar.png';
import './Header.css';
import { UserContext } from '../../App'

const Header = () => {
    // const [ signIn, setSignIn ] = useContext({UserContext});
    return (
        <div>
        <Navbar>
  <Navbar.Brand className="ml-5">
      <Link to="/"><img style={{width: '120px', height: '56px', filter: 'brightness(800%)'}} src={logo} alt=""/></Link>
      </Navbar.Brand>
<Nav className="mr-auto">
<Form inline>
<FormControl type="text" placeholder="Search your destination" className="mr-sm-2" />
<Button variant="outline-primary">Search</Button>
</Form>
</Nav>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Link className=" ml-5" to="/news">News</Link>
<Link className="ml-5" to="/destination">Destination</Link>
<Link className="ml-5" to="/blog">Blog</Link>
<Link className="ml-5 mr-5" to="/contact">Contact</Link>
<Button className="btn btn-warning">Login</Button>
</Navbar.Collapse>
</Navbar> 
</div>   
    );
};

// bg="light" variant="light"

export default Header;


 