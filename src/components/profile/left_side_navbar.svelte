<script>
	export let segment
	import {goto} from "@sapper/app"
	import {fly} from "svelte/transition"

	import {access_token, refresh_token, user} from "../../store"

	async function sign_out() {
		access_token.set(false)
		refresh_token.set(false)
		user.set(false)
		goto("/")
	}
</script>

<nav
	in:fly="{{x: -200, duration: 1000}}"
	class="hidden lg:flex w-24 flex-col items-center bg-white dark:bg-gray-800
	py-4">

	<div>
		<!-- App Logo -->

		<svg
			class="h-8 w-8 fill-current text-red-600 dark:text-red-200"
			viewBox="0 0 480 512">
			<path
				fill="currentColor"
				d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1
				10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2
				65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2
				2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5
				41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8
				45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4
				9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0
				16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3
				50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8
				3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8
				0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0
				150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7
				55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
		</svg>

	</div>

	<ul class="mt-2 text-gray-900 dark:text-gray-400 capitalize">
		<!-- Links -->

		<li
			class="mt-5 p-3 {segment === undefined ? 'text-red-600 bg-red-200' : 'hover:text-red-600 hover:bg-red-200'}
			rounded-lg">

			<a href="profile/">

				<svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
					<path
						d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
						17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
						8h-8v10h8V11m-10 4H3v6h8v-6z"></path>
				</svg>

			</a>

		</li>

		<li
			class="mt-5 p-3 {segment === 'settings' ? 'text-red-600 bg-red-200' : 'hover:text-red-600 hover:bg-red-200'}
			rounded-lg">

			<a href="profile/settings/">

				<svg class="fill-current h-5 w-5" viewBox="0 0 512 512">
					<path
						d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16
						7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16
						16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2
						16-16v-16h336c8.8 0 16-7.2
						16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8
						0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16
						16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2
						16-16v-16h80c8.8 0 16-7.2
						16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8
						0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16
						16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2
						16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"></path>
				</svg>

			</a>

		</li>

	</ul>

	<div
		class="mt-auto flex items-center p-3 hover:text-red-600 hover:bg-red-200
		dark:text-gray-400 rounded-lg">
		<!-- important action -->

		<button on:click="{sign_out}">

			<svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
				<path
					d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
					2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0
					012-2h9z"></path>
			</svg>

		</button>

	</div>

</nav>
