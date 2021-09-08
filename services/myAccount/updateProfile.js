import getAPIUrl from '../../utils/getAPIUrl';
import errorHandler from '../../utils/errorHandler';
import { getToken } from '../../utils/commonFunctions';
const axios = require('axios');

export default async function updateProfile(data) {
	try {
		let token = getToken();
		return await axios({
			method: 'post',
			url: `${getAPIUrl()}/users/updateUserProfile`,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			},
			data: data
		}).then((response) => {
			if (response.status === 200) {
				return response.data;
			}
		}).catch(async (error) => {
			await errorHandler(error);
			return false;
		})
	} catch (error) {
		await errorHandler(error);
		return true;
	}
}
