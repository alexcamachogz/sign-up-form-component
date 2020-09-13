let buttonValidator = document.getElementById("dataValidation");
let alertSuccess = document.getElementById("alertSuccess");

let inputs = [
	document.getElementById("inputFirstName"),
	document.getElementById("inputLastName"),
	document.getElementById("inputEmail"),
	document.getElementById("inputPassword")
];

let inputEmail = document.getElementById("inputEmail");
let exprEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

buttonValidator.addEventListener("click", () => {
	isEmpty(inputs);
})

function isEmpty(inputs) {
	let cont = 0;

	inputs.forEach((input) => {
		if (input.value.length === 0) {
			input.classList.add('info-error', 'img-error');
			alertSuccess.classList.remove('visible');
			input.nextElementSibling.innerHTML = `${input.placeholder} cannot be empty`;
			cont += 1;
		} else {
			input.classList.remove('info-error', 'img-error');
			input.nextElementSibling.innerHTML = "";
		}
	});

	cont += isValidEmail(inputEmail, exprEmail);

	if (cont === 0) {
		alertSuccess.classList.add('visible');
		inputs.forEach((input) => {
			input.value = ''
		})
	}
}

function isValidEmail(email, expr) {
	if (email.value.length !== 0) {
		if (!expr.test(email.value)) {
			email.classList.add('info-error');
			email.nextElementSibling.innerHTML = `Looks like this is not an email`;
			email.value = 'email@example/com'
			return 1;
		}
		else {
			return 0;
		}
	}
}