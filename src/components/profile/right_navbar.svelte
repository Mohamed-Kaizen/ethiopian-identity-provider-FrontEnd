<script>
	import {fly} from "svelte/transition"
	import axios from "axios"
	import {goto} from "@sapper/app"
	import {_, locale} from "svelte-i18n"

	import {Snackbar, Button} from "svelte-mui/src"
	import {user, light_mode, access_token, refresh_token} from "../../store.js"
	import Spinner from "../spinner/circle.svelte"

	let expired_date,
		expired_date_readable,
		has_expired,
		message,
		message_color,
		loading = false,
		visible = false
	expired_date_readable = $user.expired_natural_time

	expired_date = $user.expired_natural_day

	has_expired = $user.has_expired
	function mode_swticher() {
		if ($light_mode) {
			document.documentElement.classList.add("mode-dark")
			light_mode.set(false)
		} else {
			document.documentElement.classList.remove("mode-dark")
			light_mode.set(true)
		}
	}

	function handleLocaleChange(event) {
		locale.set(event.target.value)
	}

	async function get_data() {
		try {
			let config = {
				headers: {Authorization: `Bearer ${$access_token}`},
			}
			let lang = "en"

			if ("ar" === $locale) {
				lang = "ar"
			}
			if ("am" === $locale) {
				lang = "am"
			}

			const response = await axios.get(
				`https://ethiopia-identity-provider.herokuapp.com/${lang}/api/users/o/userinfo/`,
				config
			)

			expired_date_readable = response.data.expired_natural_time

			expired_date = response.data.expired_natural_day

			has_expired = response.data.has_expired
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
			let lang = "en"

			if ("ar" === $locale) {
				lang = "ar"
			}
			if ("am" === $locale) {
				lang = "am"
			}

			const response = await axios.post(
				`https://ethiopia-identity-provider.herokuapp.com/${lang}/api/users/o/renew/`,
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

<Snackbar style="direction: {$_('direction')}" bind:visible bg="{message_color}">
	{message}
	<span class="{$_('direction') === 'ltr' ? '' : 'mr-4'}" slot="action">
		<Button color="blue" on:click="{() => (visible = false)}">
			{$_('sign_in.close')}
		</Button>
	</span>
</Snackbar>

<aside
	style="direction: {$_('direction')}"
	in:fly="{{x: $_('direction') === 'ltr' ? 200 : -200, duration: 1000}}"
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
						class="fill-current h-5 w-5 {$_('direction') === 'ltr' ? '' : 'transform -rotate-90'}"
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

		<select
			class="{$_('direction') === 'ltr' ? 'px-2 py-1' : 'pr-8 pb-2 pt-1'}
			bg-gray-300 dark:bg-gray-600 rounded-full"
			bind:value="{$locale}"
			on:blur="{handleLocaleChange}">
			<!-- Middel side -->

			<option value="ar">{$_('languages.ar')}</option>

			<option value="am">{$_('languages.am')}</option>

			<option value="en-US">{$_('languages.en')}</option>

		</select>

		<div class="flex items-center">
			<!-- Right side -->

			<img
				class="h-10 w-10 rounded-full object-cover"
				src="{$user.picture}"
				alt="{$user.username} profile" />

		</div>

	</div>

	{#if has_expired}
		<button
			on:click="{renew}"
			class="mt-20 py-4 px-3 text-white text-center rounded-lg bg-red-400
			shadow capitalize">
			{#if loading}
				<div class="flex items-center justify-center">

					<Spinner />

				</div>
			{:else}{$_('profile.right_navbar_renew')}{/if}

		</button>
	{:else}
		<span class="mt-8 text-gray-600 dark:text-gray-500">
			{$_('profile.right_navbar_expire')}
		</span>

		<span class="mt-1 text-3xl font-semibold">
			{expired_date} {expired_date_readable}
		</span>
	{/if}

	<a
		class="mt-12 w-full p-3 text-white text-center bg-blue-700
		dark:bg-blue-500 font-normal rounded-lg capitalize shadow transition
		duration-500 ease-in-out"
		href="https://ethiopia-identity-provider.herokuapp.com/o/applications/"
		target="blank">
		{$_('profile.right_navbar_app')}
	</a>

</aside>
