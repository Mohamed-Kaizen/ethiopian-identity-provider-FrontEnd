<script>
	import {fly} from "svelte/transition"
	import axios from "axios"
	import {_, locale} from "svelte-i18n"

	import {access_token} from "../../store.js"

	let data = [],
		loading = false

	async function get_data() {
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

			const response = await axios.get(
				`https://ethiopia-identity-provider.herokuapp.com/${lang}/api/users/o/business/requested/`,
				config
			)

			data = response.data
			loading = false
		} catch (e) {
			loading = false
		}
	}
	get_data()
</script>

<div
	in:fly="{{y: 200, duration: 2000}}"
	class="h-106 w-full lg:w-1/2 mt-8 mr-6 py-2 flex-shrink-0 flex flex-col
	bg-purple-300 rounded-lg text-white overflow-y-auto">

	<h3
		class="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize">
		<!-- Header -->

		<span>{$_('profile.accepted_awaited')}</span>

	</h3>

	<div>
		<!-- List -->

		<ul class="pt-1 pb-2 px-3">
			{#each data as {description, city, natural_time, name, type}}
				<li class="mt-2">

					<div
						class="p-5 flex flex-col justify-between bg-purple-700
						rounded-lg">

						<div
							class="flex items-center justify-between
							font-semibold capitalize">
							<!-- Top section -->

							<span class="truncate w-40">{name}</span>

							<div class="flex items-center">

								<svg
									class="h-5 w-5 fill-current {$_('direction') === 'ltr' ? 'mr-1' : 'ml-1 transform rotate-180'}
									text-gray-600"
									viewBox="0 0 24 24">
									<path
										d="M14 12l-4-4v3H2v2h8v3m12-4a10 10 0
										01-19.54 3h2.13a8 8 0 100-6H2.46A10 10 0
										0122 12z"></path>
								</svg>

								<span>{city}</span>

							</div>

						</div>

						<p class="text-sm font-medium leading-snug my-3">
							<!-- Middle section -->
							{description}
						</p>

						<div class="flex justify-between">
							<!-- Bottom section -->

							<span class="text-sm text-blue-500 font-semibold">
								{type}
							</span>

							<p class="text-sm font-medium leading-snug mr-2">
								{natural_time}
							</p>

						</div>

					</div>

				</li>
			{:else}
				{#if loading}
					<div class="flex flex-col items-center mt-32">
						<div
							class="w-12 h-12 border-4 border-blue-600
							rounded-full loader"></div>
					</div>
				{:else}
					<div class="flex flex-col items-center mt-12">

						<img
							class="h-3/4 w-3/4"
							src="empty.svg/"
							alt="empty awaited list" />

					</div>
				{/if}
			{/each}
		</ul>

	</div>

</div>

<style>
	@keyframes loader-rotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.loader {
		border-right-color: transparent;
		animation: loader-rotate 1s linear infinite;
	}
</style>
