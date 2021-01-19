import React from 'react'
import {LinkContainer} from 'react-router-bootstrap' 
import {BrowserRouter as Router,Route} from "react-router-dom"
import {Navbar,Nav,Form,FormControl,Button,Container} from "react-bootstrap"
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>TechShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    
                        <Form  inline>
                         <FormControl type="text" placeholder="Search product..." className="mr-sm-2" />
                         <Button variant="outline-success">Search</Button>
    </Form>
                        <Nav className="ml-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link ><i className='fas fa-shopping-cart'> </i> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                            <Nav.Link ><i className='fas fa-user'> </i> Sign In</Nav.Link>    
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
