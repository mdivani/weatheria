import React from 'react';
import {Navbar, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../components/Logo';


const Header = () => (
    <Navbar className='bg-dark'>
        <Navbar.Brand>
            <Logo />
        </Navbar.Brand>
        <Form inline pullRight>
            <FormControl type='text' placeholder='cities' className='mr-sm-2' />
            <Button variant='outline-info'>Search</Button>
        </Form>
    </Navbar>
);

export default Header;