import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Layout from '../../components/Layout'
import Stepper from '../../components/Stepper'
import {Container, Button} from 'react-bootstrap'

import { useRouter } from 'next/router'
import {API} from '../../components/api/Api.js'
import {Api} from '../../components/api/apiServer';
import axios from 'axios';


export default function Survey({question, response}) {
    const router = useRouter()

    const [step,setStep] = useState(0)
    const [maxStep,setMaxStep] = useState(question.status? question.data.length : null)
    const [result, setResult] = useState(response)
    const [error,setError] = useState(response)
    const [errorStatus,setErrorStatus] = useState(false)
    const [nextBtn,setNextBtn] = useState(false)

    useEffect(()=>{
        console.log('result',result)
        console.log('error',error)
    },[result,error])


    useEffect(()=>{
        console.log('step',step)
        setNextBtn(result.response[step]?.answer === null || result.response[step]?.answer === "" ? false:true)
    },[result,step])


    const handlePrev = (e) => {
        if(step > 0){
            setStep(step-1)
        }
    }

    const validation = () => {
        let varError = true
        var newData = {...error}
        if(result.name === null || result.name === '' || result.name.trim() === ''){
            newData.name = '*Name is required'
            varError = false
        }else{
            newData.name = ''
        }

        if(result.phone === null || result.phone === '' || result.phone.trim() === ''){
            newData.phone = '*Phone is required'
            varError = false
        }else{
            var phoneRegex = /^(^08)(\d{3,4}){2}\d{3,4}$/;
            if(!result.phone.match(phoneRegex)){
                newData.phone = '*invalid phone number'
                varError = false
            } else {
                newData.phone = null
            }
        }

        if(result.email === null || result.email === '' || result.email.trim() === ''){
            newData.email = '*Email is required'
            varError = false
        }else{
            var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if(!result.email.match(emailRegex)){
                newData.email = '*invalid email address'
                varError = false
            } else {
                newData.email = null
            }
        }

        if(result.position === null || result.position === '' || result.position.trim() === ''){
            newData.position = '*Position is required'
            varError = false
        }else{
            newData.position = null
        }

        if(result.company === null || result.company === '' || result.company.trim() === ''){
            newData.company = '*Position is required'
            varError = false
        }else{
            newData.company = null
        }

        // validate survey

        return {
            status: varError,
            error: newData
        }
        
    }

    const handleNext = async (e) => {
        // console.log('result',result)
        if(step < question.data.length){
            setStep(step+1)
        }else{
            // validate survey answer
            let status = validation()
            setError(status.error)
            if(status.status){
                // submit here
                alert('submit')
                const reqBody = result
        
                const params = {
                    reqBody: reqBody,
                    method: API.ANSWER.type,
                    url: API.ANSWER.url,
                    access: 'none'
                }

                const config = {
                    baseURL: process.env.NEXT_PUBLIC_API,
                    timeout: process.env.NEXT_PUBLIC_REQUEST_TIMEOUT,
                }
        
                const r =  await axios.post(params.url,params.reqBody,config)
                if(r.status){
                    router.push('/done')
                }else{
                    alert(r.message)
                }
            }


        }
    }

    const handleAnswer = (e) => {

        var newData = {...result}
        newData['response'][step]['answer'] = e
        
        setResult(newData)
        
    }

    const handleExplainChange = (e) => {
        
        var newData = {...result}
        newData['response'][step][e.target.name] = e.target.value
        setResult(newData)
    }

    const handleSubmit = (e) => {

    }

    const handleOnFormChange = (e) => {
        var newData = {...result}
        newData[e.target.name] = e.target.value
        setResult(newData)
    }
    return (
        <Layout>
            <Container>
                <Stepper 
                    data={question.data}
                    result={result}
                    error={error}
                    step={step}
                    onPrev={(e)=>handlePrev(e)}
                    onNext={(e)=>handleNext(e)}
                    onSubmit={(e)=>handleSubmit(e)}
                    answer={(e)=>handleAnswer(e)}
                    onChange={(e)=>handleOnFormChange(e)}
                    onExplainChange={(e)=>handleExplainChange(e)}
                    nextBtn={nextBtn}

                />
            </Container>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {

    let res
    res = await fetch(process.env.NEXT_PUBLIC_API+API.QUESTION.url+'?survey_id='+process.env.NEXT_PUBLIC_SURVEY_ID)
    const resp = await res.json()
    let answers = []
    
    for (const iterator of resp.data) {
        answers.push({
            question: iterator.question,
            answer: null,
            explain_question: iterator.explain_label,
            explain_answer: null
        })
    }

    const responden = {
        name: null,
        phone: null,
        email: null,
        position: null,
        company: null,
        response: answers
    }

    return {
		props: {
            question: resp,
            response: responden
		},
	}
}