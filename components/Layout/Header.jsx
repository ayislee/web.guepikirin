/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Container, Nav,Navbar, NavDropdown } from 'react-bootstrap'
import GPLogo from '../images/guepikirin-logo.png'
export default function Header() {
	return (
		<Navbar expand="lg" sticky="top" className="border-bottom">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-center align-items-center">
					<Nav className="align-items-center">
						<Nav.Link className="me-3" href="#home">All Services</Nav.Link>
						<Nav.Link href="#link">Blog</Nav.Link>
							<Navbar.Brand href="#home"><img src={GPLogo.src} alt="" style={{maxHeight:62}}/></Navbar.Brand>
						<Nav.Link href="#home">All Services</Nav.Link>
						<Nav.Link href="#link">Blog</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
