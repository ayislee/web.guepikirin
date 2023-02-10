/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Container} from 'react-bootstrap'
import GPLogo from '../images/guepikirin-logo-blue.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import whatsapp from '../images/whatsapp.png'
import location from '../images/location.png'
import youtube from '../images/youtube.png'
import mail from '../images/mail.png'

export default function Footer() {
	return (
		<footer className="text-center text-lg-start fixed-bottom">
			<Container className="text-end" style={{zIndex:-1}}>
				<a href="" className="link-secondary">Terms And Conditions</a>
			</Container>
			<div className="background-green footer-container">
				<Container>
					<div className="d-flex align-items-center">
						<img src={GPLogo.src} alt="" style={{maxHeight:64}} />
						<div className="font-size-10 line-height-2 flex-grow-1">Unlimited Content, Video, Event, and More. Support Anywhere, Sponsored Anytime, Make Your Business More Reachable.</div>
						<div className="d-flex align-items-end">
							<a href="" className="me-3"><img src={facebook.src} alt="" /></a>
							<a href="" className="me-3"><img src={twitter.src} alt="" /></a>
							<a href="" className="me-3"><img src={instagram.src} alt="" /></a>
							<a href="" className="me-3"><img src={whatsapp.src} alt="" /></a>
							<a href="" className="me-3"><img src={location.src} alt="" /></a>
							<a href=""><img src={mail.src} alt="" /></a>
						</div>
					</div>
				</Container>
			</div>
			
  
		</footer>
	)
}
