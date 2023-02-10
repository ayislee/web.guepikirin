import Header from './Header';
import Footer from './Footer';
import Background from './Background'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Head from 'next/head';




export default function Layout(props) {
  return (
	<ThemeProvider >
		<Head>
			<title>Gue Pikirin</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            <link href="https://www.cufonfonts.com/font/georgia-2" rel="canonical"></link>
			
		</Head>
		
		<Background/>
		
		<Header/>
		<div>{props.children}</div>
		<Footer/>
	</ThemeProvider >

  )
}