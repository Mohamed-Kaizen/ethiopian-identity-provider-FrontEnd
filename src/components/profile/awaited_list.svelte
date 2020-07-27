<script>
	import {fly} from "svelte/transition"
	import axios from "axios"
	import moment from "moment"

	import {access_token} from "../../store.js"

	let data = []

	async function get_data() {
		try {
			let config = {
				headers: {Authorization: `Bearer ${$access_token}`},
			}

			const response = await axios.get(
				"https://ethiopia-identity-provider.herokuapp.com/api/users/business/requested/",
				config
			)
			data = response.data
		} catch (e) {
			console.log(e.response.data)
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

		<span>Awaited</span>

	</h3>
	<div>
		<!-- List -->

		<ul class="pt-1 pb-2 px-3">
			{#each data as {description, city, create_at, name, type}}
				<li class="mt-2">

					<a
						class="p-5 flex flex-col justify-between bg-purple-700
						rounded-lg"
						href="profile/#">

						<div
							class="flex items-center justify-between
							font-semibold capitalize">
							<!-- Top section -->

							<span>{name}</span>

							<div class="flex items-center">

								<svg
									class="h-5 w-5 fill-current mr-1
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

							<p class="text-sm font-medium leading-snug ">
								{moment(create_at, 'YYYYMMDD').fromNow()}
							</p>

						</div>

					</a>

				</li>
			{:else}
				<div class="flex flex-col items-center mt-12">

					<img
						class="h-3/4 w-3/4"
						src="empty.png/"
						alt="empty awaited list" />

				</div>
			{/each}
		</ul>

	</div>

</div>
