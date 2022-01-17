const data = require('./data.js');

const obj = data;

dataCheck = data.send_log_data
    .filter(co => co.count > 3)
	.filter(re => (re.reason == "buildError" || re.reason == "sendFailure"))
	.filter(em => (!(em.hasOwnProperty(em.emailName)) && !(em.hasOwnProperty(em.count)) && !(em.reason == "buildError")));

console.log(dataCheck);
	

var fs = require("fs-extra");

function part2() {
	fs.copy('./prod', './backup', (err) => {
		if(err) 
			throw err;
		console.log('success!');
	});
	
	fs.copyFile('./dev/components/cta.txt', './prod/components/cta.txt', (err) => {
		if(err) 
			throw err;
		console.log('success!');
	});
}

function part3() {
	fs.writeFile('./dev/templates/transactional.html', JSON.stringify(obj.template_data.dev_env), (err) => {
		if(err)
			throw err;
		console.log('success!');
	});
	
	fs.writeFile('./prod/templates/transactional.html', JSON.stringify(obj.template_data.prod_env), (err) => {
		if(err)
			throw err;
		console.log('success!');
	});
}