let buttonValidator = document.getElementById("dataValidation");

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
	isValidEmail(inputEmail, exprEmail);
})

function isEmpty(inputs) {

	inputs.forEach((input) => {
		if (input.value.length === 0) {
			input.classList.add('info-error', 'img-error');
			input.nextElementSibling.innerHTML = `${input.placeholder} cannot be empty`;
		} else {
			input.classList.remove('info-error', 'img-error');
			input.nextElementSibling.innerHTML = "";
		}
	});
}

function isValidEmail(email, expr) {
	if (email.value.length !== 0) {
		if (!expr.test(email.value)) {
			email.classList.add('info-error');
			email.nextElementSibling.innerHTML = `Looks like this is not an email`;
			email.value = 'email@example/com'
		}
	}
}