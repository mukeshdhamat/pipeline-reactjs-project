import getAPIUrl from '../../utils/getAPIUrl';
import errorHandler from '../../utils/errorHandler';
const axios = require('axios');

export default async function customerLogin(data) {
	try {
		return await axios({
			method: 'post',
			url: `${getAPIUrl()}/users/login`,
			headers: {
				'Content-Type': 'application/json'
			},
			data: data
		}).then((response) => {
			if (response.status === 200) {
				return response.data;
			}
		}).catch(async (error) => {
			if (error?.response?.status === 404){
				await errorHandler({message: "User does not exist!" }, true, "error-small");
				return false;
			} else if (error?.response?.status === 406){
				await errorHandler({message: "You have entered the wrong password!" }, true, "error-xl");
				return false;
			} else if (error?.response?.status === 401){
				await errorHandler({message: "Please verify your email!" }, true, "error");
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
