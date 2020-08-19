import axios from "axios"

import {access_token, refresh_token, user} from "./store"

const custom_axios = axios.create({
	baseURL: "https://ethiopia-identity-provider.herokuapp.com/api/",
})

export default custom_axios
