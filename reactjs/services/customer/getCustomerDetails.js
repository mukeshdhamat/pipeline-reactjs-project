import getAPIUrl from '../../utils/getAPIUrl';
import errorHandler from '../../utils/errorHandler';
const axios = require('axios');

export async function getCustomerDetails(token) {
	try {
		return await axios({
			method: 'get',
			url: `${getAPIUrl()}/users/profile`,
			headers: {
				'Content-Type': 'application/json',
                'Authorization': token
			}
		}).then((response) => {
			if (response.status === 200) {
				return response.data;
			}
		}).catch(async (error) => {
			await errorHandler({message: "User is Unauthorised to access portal!" }, true, "error-large");
			return false;
		})
	} catch (error) {
		await errorHandler(error);
		return false;
	}
}

export async function getUserDetails(token) {
	return await axios({
		method: 'get',
		url: `${getAPIUrl()}/users/profile`,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	}).then((response) => {
		if (response.status === 200) {
			return response.data;
		} else {
			return false;
		}
	})
}
