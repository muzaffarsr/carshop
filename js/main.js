const TOKEN = "5628672727:AAGhvIvbvVB0N0rWDkye1mEOe1HY9QNDXBk";
const CHAT_ID = "-1001602453540";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function(e){
	e.preventDefault();

	const checkName = this.name.value;
	const checkEmail = this.email.value;
	const checkPass = this.pass.value;

	let form = document.querySelector('.js-form'),
		formInputs = document.querySelectorAll('.js-input'),
		emptyInputs = Array.from(formInputs).filter(input => input.value === '');

formInputs.forEach(function	(input) {
		if(input.value === ''){
			input.classList.add('err');
			return false;
		} else{
			input.classList.remove('err');
		}
	});

	if(emptyInputs.length !== 0) {
		console.log('inputs not filled');
		return false;
	}

	
	let message = `<b>New User:</b>\n`; 
	message += `<b>Name: </b> ${ this.name.value }\n`;
	message += `<b>Email: </b> ${ this.email.value }\n`;
	message += `<b>Password Secret</b>`;

	axios.post(URI_API, {
		chat_id: CHAT_ID,
		parse_mode: 'html',
		text: message
	})
	.then((res) => {
		this.name.value = "";
		this.email.value = "";
		this.pass.value = "";
		success.innerHTML = "Good Luck! You Signed Up";
		success.style.display = "block";
		document.location.assign("shop.html")
	})
	.catch((err) => {
		console.warn(err);
	})
	.finally(() => {
		console.log("Completed");
	})
});