import toastMessage from '../utils/toastMessage';

export default async function errorHandler(error, isValidationMessage, errorLength) {
	if (error && !isValidationMessage) {
		const status = error?.response?.status;
		if (status === 401) {
			toastMessage('error-large', `Customer is unauthorized to access portal!`);
		} else if (status === 500 || status === 404) {
			const responseMessage = error?.message || "Something went wrong!";
			toastMessage('error-large', responseMessage);
		} else {
			const responseMessage = error?.message || "Something went wrong!";
			toastMessage('error-large', responseMessage);
		}
	}
	if(error && isValidationMessage){
		const responseMessage = error?.message || "Something went wrong!";
		toastMessage(errorLength || 'error-xl', responseMessage);
	}
}
