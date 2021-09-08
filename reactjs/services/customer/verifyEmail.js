import getAPIUrl from '../../utils/getAPIUrl';
import errorHandler from '../../utils/errorHandler';
const axios = require('axios');

export default async function verifyEmail(data) {
	try {
		return await axios({
			method: 'get',
			url: `${getAPIUrl()}/users/verifyUser?token=${data.token}`,
			headers: {
				'Content-Type': 'application/json'
			}
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
