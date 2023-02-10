import Head from 'next/head'
import Layout from '../components/Layout'
import {Container, Button} from 'react-bootstrap'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    return (
        <Layout>
            <Container>
                <div className="text-center margin-top">
                    <div className="title">Ready for some real growth?</div>
                    <div className="sub-title">Let’s figure out what you need, shall we?</div>
                    <Button className="own-btn mt-3" onClick={()=>router.push('/survey')}>Let’s Talk</Button>
                </div>
            </Container>
        </Layout>
    )
}
