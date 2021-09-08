import getAPIUrl from '../../utils/getAPIUrl';
import errorHandler from '../../utils/errorHandler';
const axios = require('axios');

export default async function forgotPassword(data) {
	try {
		return await axios({
			method: 'post',
			url: `${getAPIUrl()}/users/forgotPassword`,
			headers: {
				'Content-Type': 'application/json'
			},
			data: data
		}).then((response) => {
			if (response.status === 200) {
				return true;
			}
		}).catch(async (error) => {
			if (error?.response?.status === 404){
				await errorHandler({message: "User does not exist!" }, true, "error");
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
