import Head from 'next/head'
import Layout from '../components/Layout'
import {Container, Button} from 'react-bootstrap'
import { useRouter } from 'next/router'
import comming from '../components/images/coming-soon.jpg'
import commingMobile from '../components/images/coming-soon-mobile.jpg'
import React, { useState, useEffect } from 'react';

export default function Home() {
    const router = useRouter()
    const [imageBackground,setImageBackground] = useState()
    useEffect(()=>{
        console.log("width",window.innerWidth)
        if(window.innerWidth > 640) {
            console.log('desktop')
            setImageBackground(comming.src)
        }else {
            console.log('mobile')
            setImageBackground(commingMobile.src)
        }

        window.addEventListener('resize',()=>{
            console.log("width",window.innerWidth)
            if(window.innerWidth > 640) {
                setImageBackground(comming.src)
            }else {
                setImageBackground(commingMobile.src)
            }
            
        })
    },[])
    return (
        // <Layout>
        //     <Container>
        //         <div className="text-center margin-top">
        //             <div className="title">Ready for some real growth?</div>
        //             <div className="sub-title">Let’s figure out what you need, shall we?</div>
        //             <Button className="own-btn mt-3" onClick={()=>router.push('/survey')}>Let’s Talk</Button>
        //         </div>
        //     </Container>
        // </Layout>

        <div>
            <Container>
                <img src={imageBackground} alt="right" width="100%"/>
            </Container>
        </div>
    )
}
