<script>
	import {fly} from "svelte/transition"
	import {user, light_mode} from "../../store.js"

	function mode_swticher() {
		if ($light_mode) {
			document.documentElement.classList.add("mode-dark")
			light_mode.set(false)
		} else {
			document.documentElement.classList.remove("mode-dark")
			light_mode.set(true)
		}
	}
</script>

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

	<span class="mt-4 text-gray-600">Your Account will expire at</span>
	<span class="mt-1 text-3xl font-semibold">2020/7/5</span>

	<button
		class="mt-8 flex items-center py-4 px-3 text-white rounded-lg
		bg-green-400 shadow focus:outline-none capitalize">
		<!-- Action -->

		<svg class="h-5 w-5 fill-current mr-2 ml-3" viewBox="0 0 24 24">
			<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
		</svg>

		<span>start new bussiness</span>

	</button>
</aside>
