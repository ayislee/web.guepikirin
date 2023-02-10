import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../scss/app.scss';
import { SSRProvider } from 'react-bootstrap';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import Script from 'next/script'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({ Component, pageProps }) {
    return (
        <>
            <Script id="my-script2" async src={`https://www.googletagmanager.com/gtag/js?id=G-HES4BDMRPD`}></Script>
            <Script id="my-script1">
                {
                    `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'G-HES4BDMRPD');`
                }
                
            </Script>
        
            <SSRProvider>
                <Component {...pageProps} />
            </SSRProvider>
        </>
    )
}
