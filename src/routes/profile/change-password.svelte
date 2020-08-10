<script>
	import {fly} from "svelte/transition"
	import {goto} from "@sapper/app"
	import {_, locale} from "svelte-i18n"

	import {Snackbar, Button} from "svelte-mui/src"
	import axios from "axios"
	import {access_token, refresh_token, user} from "../../store"
	import Spinner from "../../components/spinner/circle.svelte"

	let old_password,
		new_password1,
		new_password2,
		message,
		message_color,
		loading = false,
		visible = false

	async function change_password() {
		loading = true
		const data = {
			old_password: old_password,
			new_password1: new_password1,
			new_password2: new_password2,
		}
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
			const response = await axios.post(
				`https://ethiopia-identity-provider.herokuapp.com/${lang}/api/users/password/change/`,
				data,
				config
			)
			message = response.data.detail
			message_color = "green"
			access_token.set(false)
			refresh_token.set(false)
			user.set(false)
			visible = true
			loading = false
			goto("signin/")
		} catch (e) {
			if ("old_password" in e.response.data) {
				message = e.response.data.old_password[0]
			} else if ("new_password2" in e.response.data) {
				message = e.response.data.new_password2[0]
			} else {
				message = e.response.data
			}
			message_color = "#f44336"
			visible = true
			loading = false
		}
	}
</script>

<Snackbar
	style="direction: {$_('direction')}"
	bind:visible
	bg="{message_color}"
	bottom>
	{message}
	<span class="{$_('direction') === 'ltr' ? '' : 'mr-4'}" slot="action">
		<Button color="blue" on:click="{() => (visible = false)}">
			{$_('sign_in.close')}
		</Button>
	</span>
</Snackbar>

<svelte:head>
	<title>{$_('profile.change_password_title')} | {$_('title.index')}</title>
</svelte:head>

<div in:fly="{{y: 200, duration: 1000}}">

	<div class="text-center mt-10">

		<div class="flex items-center justify-center">

			<svg
				fill="none"
				viewBox="0 0 24 24"
				class="w-12 h-12 text-red-500 dark:text-red-400"
				stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2
					2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
			</svg>

		</div>

		<h2 class="text-4xl tracking-tight dark:text-gray-400">
			{$_('profile.change_password_title')}
		</h2>

	</div>

	<div class="flex justify-center my-2 mx-4 md:mx-0">

		<form
			on:submit|preventDefault="{change_password}"
			class="w-full max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-md
			p-6">

			<div class="flex flex-wrap -mx-3 mb-0">

				<div class="w-full md:w-full px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="old_password">
						{$_('profile.old_password')}
					</label>

					<input
						id="old_password"
						class="w-full bg-gray-200 dark:bg-gray-400 text-gray-900
						font-medium border border-gray-400 rounded-lg py-3 px-3
						leading-tight focus:outline-none shadow"
						type="password"
						bind:value="{old_password}"
						required />
				</div>

				<div class="w-full md:w-full px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="new_password1">
						{$_('profile.new_password')}
					</label>

					<input
						id="new_password1"
						class="w-full bg-gray-200 dark:bg-gray-400 text-gray-900
						font-medium border border-gray-400 rounded-lg py-3 px-3
						leading-tight focus:outline-none shadow"
						type="password"
						bind:value="{new_password1}"
						required />

				</div>

				<div class="w-full md:w-full px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="new_password2">
						{$_('profile.confirm_new_password')}
					</label>

					<input
						id="new_password2"
						class="w-full bg-gray-200 dark:bg-gray-400 text-gray-900
						font-medium border border-gray-400 rounded-lg py-3 px-3
						leading-tight focus:outline-none shadow"
						type="password"
						bind:value="{new_password2}"
						required />

				</div>

				<div class="w-full md:w-full px-3 mb-6">

					<button
						disabled="{!old_password || !new_password1 || !new_password2}"
						type="submit"
						class="w-full bg-red-600 dark:bg-red-700 text-white
						font-bold rounded-lg py-3 px-3 leading-tight
						hover:bg-red-500 capitalize shadow-md">

						{#if loading}
							<div class="flex items-center justify-center">
								<Spinner />
							</div>
						{:else}{$_('profile.submit')}{/if}

					</button>

				</div>

			</div>

		</form>

	</div>
</div>
