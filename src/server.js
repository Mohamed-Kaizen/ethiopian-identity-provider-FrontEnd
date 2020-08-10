import sirv from "sirv"
import polka from "polka"
import compression from "compression"
import * as sapper from "@sapper/server"
const {json} = require("body-parser")

import {i18nMiddleware} from "./i18n.js"

const {PORT, NODE_ENV} = process.env
const dev = NODE_ENV === "development"

const app = polka()
	.use(json())
	.use(
		compression({threshold: 0}),
		sirv("static", {dev}),
		i18nMiddleware(),
		sapper.middleware()
	)
	.listen(PORT, (err) => {
		if (err) console.log("error", err)
	})
export default app.handler
