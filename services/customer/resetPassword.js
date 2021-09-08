import getAPIUrl from '../../utils/getAPIUrl';
import errorHandler from '../../utils/errorHandler';
const axios = require('axios');

export default async function resetPassword(data) {
	try {
		return await axios({
			method: 'post',
			url: `${getAPIUrl()}/users/resetPassword`,
			headers: {
				'Content-Type': 'application/json'
			},
			data: data
		}).then((response) => {
			if (response.status === 200) {
				return true;
			}
		}).catch(async (error) => {
			await errorHandler(error);
			return false;
		})
	} catch (error) {
		await errorHandler(error);
		return false;
	}
}
