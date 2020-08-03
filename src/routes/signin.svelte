<script>
	import {fly} from "svelte/transition"
	import {goto} from "@sapper/app"
	import {_} from "svelte-i18n"

	import {Textfield, Snackbar, Button} from "svelte-mui/src"
	import custom_axios from "../axios.js"
	import {access_token, refresh_token, user} from "../store"
	import Spinner from "../components/spinner/circle.svelte"

	if ($access_token || $refresh_token) {
		goto("profile/")
	}

	let username,
		password,
		loading = false,
		visible = false

	async function sign_in() {
		loading = true
		const data = {username: username, password: password}
		try {
			const response = await custom_axios.post("users/login/", data)
			access_token.set(response.data.access_token)
			refresh_token.set(response.data.refresh_token)
			user.set(response.data.user)
			loading = false
			goto("profile/")
		} catch (e) {
			visible = true
			loading = false
		}
	}
</script>

<svelte:head>
	<title>{$_('sign_in.sign_in')} | {$_('title.index')}</title>
</svelte:head>

<Snackbar style="direction: {$_('direction')}" bind:visible bg="#f44336" bottom>
	{$_('sign_in.error')}
	<span class="{$_('direction') === 'ltr' ? '' : 'mr-4'}" slot="action">
		<Button color="blue" on:click="{() => (visible = false)}">
			{$_('sign_in.close')}
		</Button>
	</span>
</Snackbar>

<div
	style="direction: {$_('direction')}"
	in:fly="{{x: $_('direction') === 'ltr' ? 200 : -200, duration: 1000, delay: 1100}}">

	<div class="text-center mt-8">

		<h2 class="text-2xl md:text-4xl tracking-tight dark:text-gray-400">
			{$_('sign_in.title')}
		</h2>

	</div>

	<div class="flex justify-center mt-8 lg:mt-16 mx-4 md:mx-0">

		<form
			on:submit|preventDefault="{sign_in}"
			class="w-full max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-md
			p-6">

			<div class="flex flex-wrap -mx-3 mb-0">

				<div class="w-full md:w-full flex flex-col px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="username">
						{$_('sign_in.username')}
					</label>

					<input
						id="username"
						class="w-full bg-gray-200 dark:bg-gray-400 text-gray-900
						font-medium border border-gray-400 rounded-lg py-3 px-3
						leading-tight focus:outline-none shadow"
						type="text"
						bind:value="{username}"
						required />
				</div>

				<div class="w-full md:w-full flex flex-col px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="password">
						{$_('sign_in.password')}
					</label>

					<input
						id="password"
						class="w-full bg-gray-200 dark:bg-gray-400 text-gray-900
						font-medium border border-gray-400 rounded-lg py-3 px-3
						leading-tight focus:outline-none shadow"
						type="password"
						bind:value="{password}"
						required />

				</div>

				<div class="w-full px-3 mb-6">

					<button
						disabled="{!username || !password}"
						type="submit"
						class="block w-full bg-blue-600 dark:bg-blue-700
						text-white font-bold rounded-lg py-3 px-3 leading-tight
						hover:bg-blue-500 shadow-md capitalize">
						{#if loading}
							<div class="flex items-center justify-center">
								<Spinner />
							</div>
						{:else}{$_('sign_in.sign_in')}{/if}
					</button>

				</div>

			</div>

		</form>

	</div>

</div>
