export const regex = {
	email: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
	password: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,25}$/,
	onlyNumber: /^[0-9\b]+$/,
	alphaNumeric: /^[0-9a-zA-Z]*$/,
	alphaNumericAndSpecialCharacter: /^[A-Za-z0-9_@./#&+-]*$/
};
