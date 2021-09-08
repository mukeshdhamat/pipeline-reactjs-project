import getAPIUrl from '../../utils/getAPIUrl';
import errorHandler from '../../utils/errorHandler';
import { DUMMY_TRIPS } from '../../utils/constant';
const axios = require('axios');

export default async function getTrips() {
	try {
		return DUMMY_TRIPS;
		const query = "limit=5&orderBy=recentlyViewed";
		const response = await axios({
			method: 'get',
			url: `${getAPIUrl()}/api/trips?${query}`,
			headers: {
				'Content-Type': 'application/json'
			},
		});
		if (response.status === 200) {
			return response.data;
		} else {
			return false;
		}
	} catch (error) {
		await errorHandler(error);
		return false;
	}
}
