import axios from 'axios';

export function fetch(options){
	return new Promise((resolve,reject) => {
		const instance = axios.create({
			headers:{
				'Content-Type':'application/json;charset=UTF-8',
				
			},
			timeout:30*1000
		});
		
		instance(options)
		  .then(response =>{
		  	resolve(response);
		  })
		  .catch(error => {
		  	console.log('请求异常：'+error);
		  	reject(error);
		  });
	});
}
