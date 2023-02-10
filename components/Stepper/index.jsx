import React, {useState,useEffect} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';



export default function Stepper(props) {
	
	useEffect(()=> {
		
	},[])


	const handleAnswer = (e) => {
		
		props.answer(e)
	}

	const render_text = () => {
		return (
			<>Text</>
		)
	}

	// console.log('props.result.response[props.step].answer',props.result.response[props.step].answer)
	const render_radio = (data) => {
		return (
			<div>
				<div className="title text-center color-black">{props.data[props.step].question}</div>
				
				<div>
					<Form>
						
						{data?.ms_answers?.map((a,i)=>(
							<div key={i} className="mb-3">
								<Form.Check
									type="radio"
									label={a.answer}
									id={`question-${data.ms_question_id}`}
									name={`question-${data.ms_question_id}`}
									checked={props.result.response[props.step].answer === a.answer ? true:false}

									onChange={()=>handleAnswer(a.answer)}
								/>
								

							</div>
						))}
						
						{props.data[props.step].isexplain === '1' ?(
							<div>
								<div>{props.data[props.step].explain_label}</div>
								<Form.Control
									type="text"
									name={`explain_answer`}
									value={props.result.response[props.step].explain_answer || ""}
									onChange={(e)=>props.onExplainChange(e)}
								/>
							</div>
						):(``)}
						

					</Form>
				</div>

			</div>
		)
	}
	const render_checkbox = () => {
		return (
			<>Checkbox</>
		)
	}

	function log(value) {
		console.log(value); //eslint-disable-line
		props.answer(props.data[props.step].ms_answers[value].answer)
	}

	const handleChange = () => {

	}

	const render_slider = () => {
		const marks = {}
		let defaultValue
		// console.log('props.data[props.step].answers',props.data[props.step].ms_answers)
		// console.log('props.result.response[props.step].answer',props.result.response[props.step].answer)
		
		for (const key in props.data[props.step].ms_answers) {
			marks[key] = props.data[props.step].ms_answers[key].answer
		}

		if(props.result.response[props.step].answer===null){
			defaultValue=0
			props.answer(props.data[props.step].ms_answers[0].answer)
		}else{
			for (const x in marks) {
				if(marks[x] === props.result.response[props.step].answer) {
					// console.log('marks[x]',marks[x])
					// console.log('props.result.response[props.step].answer',props.result.response[props.step].answer)
					defaultValue=x
					// console.log('defaultValue',defaultValue)
				}else{
					// console.log('step', x)
				}
	
				
			}
		}

		
		console.log('mark', marks)
		return (
			<div>
				<div>
				<div>
					<div className="title text-center color-black">{props.data[props.step].question}</div>
				</div>
					<Slider 
						dots 
						marks={marks}
						min={0}
						max= {props.data[props.step].ms_answers.length-1}
						
						defaultValue={defaultValue} 
						onChange={log} 
					/>
				</div>
				
    			
			</div>
		)
	}

	const render_visitor = () => {
		return (
			<div>
				<div>
					<div className="title text-center color-black">let&#180;s get know each other</div>
				</div>
				<div className="form-container">
					<Form>
						<Row className="align-items-center">
							<Col md={3}>Name</Col>
							<Col md={9}>
								<Form.Control
									type="text"
									name="name"
									value={props.result.name || ""}
									onChange={(e)=>props.onChange(e)}
								/>
								<div className="error-message">{props.error.name}</div>
							</Col>
						</Row>
						<Row className="align-items-center">
							<Col md={3}>Phone</Col>
							<Col md={9}>
								<Form.Control
									type="text"
									name="phone"
									value={props.result.phone || ""}
									onChange={(e)=>props.onChange(e)}
								/>
								<div className="error-message">{props.error.phone}</div>
							</Col>
							
						</Row>
						<Row className="align-items-center">
							<Col md={3}>Email</Col>
							<Col md={9}>
								<Form.Control
									type="text"
									name="email"
									value={props.result.email || ""}
									onChange={(e)=>props.onChange(e)}
								/>
								<div className="error-message">{props.error.email}</div>
							</Col>
						</Row>
						<Row className="align-items-center">
							<Col md={3}>Position</Col>
							<Col md={9}>
								<Form.Control
									type="text"
									name="position"
									value={props.result.position || ""}
									onChange={(e)=>props.onChange(e)}
								/>
								<div className="error-message">{props.error.position}</div>
							</Col>
						</Row>
						<Row className="align-items-center">
							<Col md={3}>Company Name</Col>
							<Col md={9}>
								<Form.Control
									type="text"
									name="company"
									value={props.result.company || ""}
									onChange={(e)=>props.onChange(e)}
								/>
								<div className="error-message">{props.error.company}</div>
							</Col>
						</Row>
					</Form>
				</div>
			</div>
			
		)
		
	}


	const render_option = (data) => {
		switch (data?.type) {
			case "text":
				return render_text()
				break;
			
			case "radio":
				return render_radio(data)
			
			break;

			case "checkbox":
				return render_checkbox()
				break;
			
			case "slider":
				return render_slider()
			break;


		
			default:
				
			return render_visitor()
				break;
		}


		return (
			<>
				<div>{data.question}</div>

			</>
		)
	}

	const handleNext = () => {
		props.onNext()
	}

	const handlePrev = () => {
		props.onPrev()
	}

	const handleVisitor = () =>{

	}
	
	return (
		<>
			<div className="container-question">
				{/* <div>{JSON.stringify(props.data[props.step])}</div> */}
				{render_option(props.data[props.step])}
			</div>
			<div className="navigator text-center">
				{props.step > 0 ? (<Button className="own-btn" onClick={handlePrev}>Previous</Button>):(``)}
				<Button className="own-btn" onClick={handleNext} disabled={!props.nextBtn}>Next</Button>
				

			</div>
		</>
		
	)
}
