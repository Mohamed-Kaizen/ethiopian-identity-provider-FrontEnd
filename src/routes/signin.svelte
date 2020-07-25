<script>
	import {fly} from "svelte/transition"
</script>

<div in:fly="{{x: 200, duration: 1000, delay: 1100}}">

	<div class="text-center mt-16">

		<div class="flex items-center justify-center">

			<svg
				fill="none"
				viewBox="0 0 24 24"
				class="w-12 h-12 text-blue-500 dark:text-blue-400"
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
			Sign in into your account
		</h2>

	</div>

	<div class="flex justify-center my-2 mx-4 md:mx-0">

		<form
			class="w-full max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-md
			p-6">

			<div class="flex flex-wrap -mx-3 mb-0">

				<div class="w-full md:w-full px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="username">
						username
					</label>

					<input
						id="username"
						class="appearance-none block w-full bg-white
						dark:bg-gray-400 text-gray-900 font-medium border
						border-gray-400 rounded-lg py-3 px-3 leading-tight
						focus:outline-none"
						type="text"
						required />
				</div>

				<div class="w-full md:w-full px-3 mb-6">

					<label
						class="block uppercase tracking-wide text-gray-700
						dark:text-gray-400 text-xs font-bold mb-2"
						for="password">
						password
					</label>

					<input
						id="password"
						class="appearance-none block w-full bg-white
						dark:bg-gray-400 text-gray-900 font-medium border
						border-gray-400 rounded-lg py-3 px-3 leading-tight
						focus:outline-none"
						type="password"
						required />

				</div>

				<div class="w-full md:w-full px-3 mb-6">

					<button
						type="submit"
						class="appearance-none block w-full bg-blue-600
						dark:bg-blue-700 text-gray-400 font-bold rounded-lg py-3
						px-3 leading-tight hover:bg-blue-500 capitalize">
						Sign in
					</button>

				</div>

			</div>

		</form>

	</div>
</div>
