<script>
	import {fly} from "svelte/transition"
	import {goto} from "@sapper/app"

	import axios from "axios"
	import {_, locale} from "svelte-i18n"
	import {Snackbar, Button} from "svelte-mui/src"

	import Spinner from "../../components/spinner/circle.svelte"
	import {access_token} from "../../store.js"

	import Users from "../../components/profile/users_transfer.svelte"

	let business_name,
		business_city,
		business_sub_city,
		business_type,
		business_description,
		selected_users,
		message,
		message_color,
		loading = false,
		visible = false

	async function create() {
		try {
			const owners = []
			if ("Sole Proprietorship" !== business_type) {
				for (const user of selected_users) {
					owners.push(user.username)
				}
			}
			const data = {
				name: business_name,
				description: business_description,
				city: business_city,
				sub_city: business_sub_city,
				type: business_type,
				owners: owners,
			}

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
				`https://ethiopia-identity-provider.herokuapp.com/${lang}/api/users/o/business/`,
				data,
				config
			)

			message = "Bussiness request has been created"
			message_color = "green"
			visible = true
			loading = false
			goto("profile/")
		} catch (e) {
			message = "Bussiness with this name already exists"
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
	<title>{$_('profile.right_navbar_business')} | {$_('title.index')}</title>
</svelte:head>

<div in:fly="{{y: 200, duration: 1000}}">

	<div class="text-center mt-10">

		<h2 class="text-4xl tracking-tight dark:text-gray-400 capitalize">
			{$_('profile.right_navbar_business')}
		</h2>

	</div>

	<div class="flex justify-center my-2 mx-4 md:mx-0">

		<form
			on:submit|preventDefault="{create}"
			class="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg
			shadow-md p-6">

			<div class="flex flex-wrap -mx-3 mb-0">

				<div class="w-full px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="business_name">
						{$_('profile.business_name')}
					</label>

					<input
						id="business_name"
						class="w-full bg-gray-200 dark:bg-gray-400 text-gray-900
						font-medium border border-gray-400 rounded-lg py-3 px-3
						leading-tight focus:outline-none shadow"
						type="text"
						bind:value="{business_name}"
						required />
				</div>

				<div class="w-full px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="business_city">
						{$_('profile.business_city')}
					</label>

					<input
						id="business_city"
						class="w-full bg-gray-200 dark:bg-gray-400 text-gray-900
						font-medium rounded-lg py-3 px-3 leading-tight
						focus:outline-none shadow"
						type="text"
						bind:value="{business_city}"
						required />
				</div>

				<div class="w-full px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="business_sub_city">
						{$_('profile.business_sub_city')}
					</label>

					<input
						id="business_sub_city"
						class="w-full bg-gray-200 dark:bg-gray-400 text-gray-900
						font-medium border border-gray-400 rounded-lg py-3 px-3
						leading-tight focus:outline-none shadow"
						type="text"
						bind:value="{business_sub_city}"
						required />
				</div>

				<div class="w-full px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="business_type">
						{$_('profile.business_type')}
					</label>

					<select
						bind:value="{business_type}"
						required
						class="w-full bg-gray-200 p-2 focus:outline-none
						focus:border-gray-500 shadow">

						<option value="---------" selected>---------</option>

						<option value="Sole Proprietorship">
							{$_('profile.business_type_solo')}
						</option>

						<option value="Private Limited Company">
							{$_('profile.business_type_private')}
						</option>

					</select>

				</div>

				{#if business_type === 'Private Limited Company'}
					<label
						class="mb-2 px-3 uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold"
						for="business_owners">
						{$_('profile.business_owners')}
					</label>
					<Users bind:selected_users />
				{/if}

				<div class="w-full px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="business_description">
						{$_('profile.business_description')}
					</label>
					<textarea
						bind:value="{business_description}"
						class="w-full bg-gray-200 h-40 focus:outline-none
						focus:border-gray-500 shadow"></textarea>
				</div>

				<div class="w-full px-3 mb-6">

					<button
						disabled="{!business_name || !business_city || !business_sub_city || !business_type || !business_description || loading}"
						type="submit"
						class="appearance-none block w-full bg-red-600
						dark:bg-red-700 text-white font-bold rounded-lg py-3 px-3
						leading-tight hover:bg-red-500 capitalize shadow-md">

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
