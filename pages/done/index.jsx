import Head from 'next/head'
import Layout from '../../components/Layout'
import {Container, Button} from 'react-bootstrap'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    return (
        <Layout>
            <Container>
                <div className="text-center margin-top">
                    <div className="title">Thanks for getting in touch, [INSERT NAME HERE]!</div>
					<div className="title">Get ready, we&#180;ll get back to you within 48 hours!</div>
                    <div className="sub-title">
						In the mean time...
						<br />
						Want to improve your strategy while we review your business?
						<br />
						Here&#180;s our standard marketing playbook you can learn for personalized benchmarks.</div>
                    <Button className="own-btn mt-3 me-3">Download our E-Book</Button>
					<Button className="own-btn mt-3">What to expect</Button>

                </div>
            </Container>
        </Layout>
    )
}
