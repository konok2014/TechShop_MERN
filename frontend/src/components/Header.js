import React from 'react'

import {LinkContainer} from 'react-router-bootstrap' 
import {BrowserRouter as Router,Route} from "react-router-dom"
import {Navbar,Nav,Form,FormControl,Button,Container, NavDropdown} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
const Header = () => {
    const dispatch = useDispatch()
    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin

    const logoutHandler=()=>{
        dispatch(logout())
    }

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
                            {userInfo?(
                                <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                   <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ): <LinkContainer to="/login">
                            <Nav.Link ><i className='fas fa-user'> </i> Sign In</Nav.Link>    
                            </LinkContainer>}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
