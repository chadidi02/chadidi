import axios from "axios";

export async function getUser(username) {
	try {
		const { data } = await axios.get(
			`https://gitconnected.com/v1/portfolio/chadidi02`
		);
		return data;
	} catch (error) {
		console.error(error);
	}
}
