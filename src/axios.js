import axios from "axios"

const custom_axios = axios.create({
	baseURL: "https://ethiopia-identity-provider.herokuapp.com/api/",
})

export default custom_axios
