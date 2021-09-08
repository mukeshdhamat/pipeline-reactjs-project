import getAPIUrl from '../../utils/getAPIUrl';
import errorHandler from '../../utils/errorHandler';
const axios = require('axios');

export default async function registerCustomer(data) {
	try {
		return await axios({
			method: 'post',
			url: `${getAPIUrl()}/users/register`,
			headers: {
				'Content-Type': 'application/json'
			},
			data: data
		}).then((response) => {
			if (response.status === 200) {
				return true;
			}
		}).catch(async (error) => {
			if (error?.response?.status === 409) {
				await errorHandler({ message: "A user with this email address already exists" }, true, "error-large");
				return false;
			}
			await errorHandler(error);
			return false;
		})
	} catch (error) {
		await errorHandler(error);
		return false;
	}
}
