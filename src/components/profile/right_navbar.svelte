<script>
	import {fly} from "svelte/transition"
	import axios from "axios"
	import moment from "moment"
	import {goto} from "@sapper/app"

	import {Snackbar, Button} from "svelte-mui/src"
	import {user, light_mode, access_token, refresh_token} from "../../store.js"
	import Spinner from "../spinner/circle.svelte"

	let expired_date,
		expired_date_readable,
		is_vaild,
		message,
		message_color,
		loading = false,
		visible = false

	function mode_swticher() {
		if ($light_mode) {
			document.documentElement.classList.add("mode-dark")
			light_mode.set(false)
		} else {
			document.documentElement.classList.remove("mode-dark")
			light_mode.set(true)
		}
	}

	async function get_data() {
		try {
			let config = {
				headers: {Authorization: `Bearer ${$access_token}`},
			}

			const response = await axios.get(
				"https://ethiopia-identity-provider.herokuapp.com/api/users/user/",
				config
			)

			expired_date_readable = moment(
				response.data.expired_at,
				"YYYYMMDD"
			).fromNow()

			expired_date = moment(response.data.expired_at).format(
				"MMMM Do YYYY"
			)

			is_vaild = moment(response.data.expired_at).isAfter(new Date())
		} catch (e) {
			access_token.set(false)
			refresh_token.set(false)
			user.set(false)
			goto("signin/")
		}
	}
	get_data()

	async function renew() {
		try {
			loading = true
			let config = {
				headers: {Authorization: `Bearer ${$access_token}`},
			}

			const response = await axios.post(
				"https://ethiopia-identity-provider.herokuapp.com/api/users/renew/",
				{},
				config
			)

			message = response.data.detail
			message_color = "green"
			visible = true
			loading = false
		} catch (e) {
			message = e.response.data.detail
			message_color = "#f44336"
			visible = true
			loading = false
		}
	}
</script>

<Snackbar bind:visible bg="{message_color}">
	{message}
	<span slot="action">
		<Button color="blue" on:click="{() => (visible = false)}">Close</Button>
	</span>
</Snackbar>

<aside
	in:fly="{{x: 200, duration: 1000}}"
	class="w-1/4 px-6 py-4 hidden lg:flex flex-col bg-gray-200 dark:bg-gray-800
	dark:text-gray-400">

	<div class="flex items-center justify-between">
		<!-- Info -->

		<div
			class="mr-2 hover:text-blue-500 cursor-pointer transition
			duration-700 ease-in-out "
			on:click="{mode_swticher}">

			{#if !$light_mode}
				<button>

					<svg
						class="fill-current h-5 w-5"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round">
						<circle cx="12" cy="12" r="5"></circle>
						<line x1="12" y1="1" x2="12" y2="3"></line>
						<line x1="12" y1="21" x2="12" y2="23"></line>
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
						<line x1="1" y1="12" x2="3" y2="12"></line>
						<line x1="21" y1="12" x2="23" y2="12"></line>
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>

					</svg>

				</button>
			{:else}
				<button>

					<svg
						class="fill-current h-5 w-5"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round">
						<path
							d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>

				</button>
			{/if}
		</div>

		<div class="flex items-center">
			<!-- Right side -->

			<img
				class="h-10 w-10 rounded-full object-cover"
				src="{$user.picture}"
				alt="{$user.username} profile" />

		</div>

	</div>

	{#if is_vaild}
		<span class="mt-8 text-gray-600">Your Account will expire at</span>

		<span class="mt-1 text-3xl font-semibold">
			{expired_date} {expired_date_readable}
		</span>
	{:else}
		<button
			on:click="{renew}"
			class="mt-8 text-center py-4 px-3 text-white rounded-lg bg-red-400
			shadow capitalize">
			{#if loading}
				<div class="flex items-center justify-center">

					<Spinner />

				</div>
			{:else}send renew request{/if}

		</button>
	{/if}

	<a
		class="mt-8 "
		href="https://ethiopia-identity-provider.herokuapp.com/o/applications/"
		target="blank">

		<button
			class="w-full p-3 text-center text-white bg-blue-700 dark:bg-blue-500
			-md font-normal rounded-lg capitalize shadow transition duration-500
			ease-in-out ">
			create your app
		</button>

	</a>

	<button
		class="mt-8 flex items-center py-4 px-3 text-white rounded-lg
		bg-green-400 shadow capitalize">
		<!-- Action -->

		<svg class="h-5 w-5 fill-current mr-2 ml-3" viewBox="0 0 24 24">
			<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
		</svg>

		<span>start new bussiness</span>

	</button>

</aside>
