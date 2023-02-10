import axios from 'axios';
var qs = require('qs');
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

export const Api = async (params,pub=true) => {
	// console.log('pub',pub)
	// console.log('ENV API',process.env.NEXT_PUBLIC_API)
	// console.log('ENV BASE URL',process.env.NEXT_PUBLIC_APP_BASE_URL)
	// console.log('ENV TIMEOUT',process.env.NEXT_PUBLIC_REQUEST_TIMEOUT)

    
	
	let Token
	try {
		const CookieToken = await Cookies.get(process.env.NEXT_PUBLIC_COOKIES_PREFIX+process.env.NEXT_PUBLIC_COOKIES_AUTH_NAME)
		Token  = JSON.parse(CookieToken)
	} catch (error) {
		Token  = ""
	}
    

    var bytes  = CryptoJS.AES.decrypt(Token.token, process.env.NEXT_PUBLIC_SECRET_KEY);
    var originalToken = bytes.toString(CryptoJS.enc.Utf8);

	const config = {
		baseURL: (pub)?(process.env.NEXT_PUBLIC_API):(process.env.NEXT_PUBLIC_APP_BASE_URL),
		timeout: process.env.NEXT_PUBLIC_REQUEST_TIMEOUT,
	}

	// console.log('config',config)

	if(params.access==='auth'){
		config.headers = {'Authorization': 'bearer '+originalToken.slice(1, -1)}
	}
	// console.log(params)

	let response


	try {
		switch (params.method) {

			case 'get':
				response =  await axios.get(params.url+'?'+qs.stringify(params.reqBody),config)
				break;

			case 'post':
				response =  await axios.post(params.url,params.reqBody,config)
				break;

			case 'put':

				config.data = params.reqBody;
				response =  await axios.put(params.url,params.reqBody,config)
				break;

			case 'delete':
				config.data = params.reqBody;
				response =  await axios.delete(config.baseURL+params.url,config)
				break;
			default:
				break;
		}

		return response.data

	} catch (error) {
		// console.log('ini errrnya')
		// console.log({error})
		if(!error.response){
			return error
		}else{
			// console.log('else')
			if(error.response.status === 401 || error.response.status === 403){
				// clear local stotage
				// localStorage.clear();
				// window.location.replace(process.env.NEXT_APP_BASE_URL+'/login');
			}
		}
	}



}
