/* eslint-disable @next/next/no-img-element */
import React from 'react'
import backgroundGP  from '../images/background01.png'
import backgroundLine  from '../images/background02.png'
import {Row,Col} from 'react-bootstrap'

export default function Background() {
	return (
		<div className="position-absolute background-container" >
			<Row>
				<Col md={6}>
					<img src={backgroundGP.src} alt="" />
				</Col>
				<Col md={6} className="text-end kanan">
					<img src={backgroundLine.src} alt="right" />
				</Col>
			</Row>
			
			
			
		</div>
	)
}
