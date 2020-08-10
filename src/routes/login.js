import axios from "axios"

export async function post(req, res, next) {
	/* Initializes */
	res.setHeader("Content-Type", "application/json")
	/* Retrieves the data */
	const data = req.body

	const {username, password} = data

	const response = await axios({
		method: "POST",
		url: "https://ethiopia-identity-provider.herokuapp.com/o/token/",
		headers: {"Content-Type": "application/x-www-form-urlencoded"},
		data: `client_id=riZ8Bcesu8GaTq8qL6I5oJxeWarZzDcDzZnIOrya&&grant_type=password&username=${username}&password=${password}`,
	})

	return res.end(JSON.stringify(response.data))
}
