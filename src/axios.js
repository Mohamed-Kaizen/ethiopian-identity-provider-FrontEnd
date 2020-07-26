import axios from "axios"

import {access_token, refresh_token, user} from "./store"

const custom_axios = axios.create({
	baseURL: "https://ethiopia-identity-provider.herokuapp.com/api/",
})

if (typeof window !== "undefined") {
	let access_tokens, refresh_tokens

	access_token.subscribe((value) => (access_tokens = value))
	refresh_token.subscribe((value) => (refresh_tokens = value))
	console.log(access_tokens)
	if (access_tokens && refresh_tokens) {
		console.log(access_tokens)
		custom_axios.defaults.headers.common[
			"Authorization"
		] = `Bearer ${access_tokens}`
		let refreshing = false
		let subscribes = []
		function subscribes_token_refresh(callback) {
			subscribes.push(callback)
		}
		function on_refresh() {
			subscribes.map((callback) => callback())
		}
		custom_axios.interceptors.response.use(
			(response) => {
				return response
			},
			(error) => {
				const {
					config,
					response: {status, data},
				} = error
				if (status === 403 && data.code === "token_not_valid") {
					if (!refreshing) {
						refreshing = true
						custom_axios
							.post("users/token/refresh/", {
								refresh: refresh_tokens,
							})
							.then((res) => {
								refreshing = false
								access_token.set(res.data.access)
								subscribes = []
							})
							.catch((err) => {
								console.log(err.response)
								token.set(false)
								user.set(false)
								window.location = "/"
							})
					}
					const request_subscribes = new Promise((resolve) => {
						subscribes_token_refresh(() => {
							config.headers[
								"Authorization"
							] = `Bearer ${access_tokens}`
							resolve(custom_axios(config))
						})
					})
					on_refresh()
					return request_subscribes
				}
				return Promise.reject(error)
			}
		)
	}
}
export default custom_axios
