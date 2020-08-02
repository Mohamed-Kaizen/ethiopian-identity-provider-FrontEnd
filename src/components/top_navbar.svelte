<script>
	export let light_mode

	import {_, locale} from "svelte-i18n"

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
</script>

<nav
	style="direction: {$_('direction')}"
	class="w-full h-16 p-4 flex items-center justify-between lg:justify-between
	bg-white text-gray-600 dark:text-gray-400 dark:bg-gray-800 shadow transition
	duration-500 ease-in-out">

	<ul class="flex items-center">
		<!-- left section  -->

		<li
			class="mt-1 {$_('direction') === 'ltr' ? 'mr-2' : 'ml-2'}
			hover:text-blue-500 cursor-pointer transition duration-700
			ease-in-out"
			on:click="{mode_swticher}">

			{#if !$light_mode}
				<button>

					<svg
						class="h-5 w-5 fill-current"
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
						class="fill-current h-5 w-5 transform {$_('direction') === 'ltr' ? '' : '-rotate-90'}"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round">
						<path
							d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>

				</button>
			{/if}
		</li>

		<li class="hidden md:block">

			<select
				class="{$_('direction') === 'ltr' ? 'px-2 py-1 ml-2' : 'mr-2 pr-8 pb-2 pt-1'}
				bg-gray-300 dark:bg-gray-600 rounded-full"
				bind:value="{$locale}"
				on:blur="{handleLocaleChange}">

				<option value="ar">{$_('languages.ar')}</option>

				<option value="en-US">{$_('languages.en')}</option>

			</select>

		</li>

	</ul>

	<ul class="pl-10 md:pl-0">
		<!-- left section  -->

		<a
			class="flex {$_('direction') === 'ltr' ? 'mr-4 items-center' : 'mr-24 md:mr-0'}
			hover:text-blue-600"
			href="/">

			<svg
				class="h-8 w-8 fill-current {$_('direction') === 'ltr' ? 'mr-0 md:mr-2' : 'ml-0 md:ml-2'}"
				viewBox="0 0 480 512">
				<path
					fill="currentColor"
					d="M186.1 328.7c0 20.9-10.9 55.1-36.7
					55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7
					55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1
					74.8-216.7 74.8-75.8 0-186.2
					2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5
					41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3
					14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0
					54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6
					30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39
					114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56
					6-14.9 2.3-29.8 3.2-45.1 3.2-15.2
					0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5
					82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4
					150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1
					36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
			</svg>

			<span class="hidden md:block text-lg">{$_('top_navbar.title')}</span>

		</a>

	</ul>

	<a href="signin/" class="-ml-2 focus:outline-none focus:text-red-600">
		<!-- right section  -->

		<button
			type="button"
			class="py-1 px-2 rounded-full focus:outline-none focus:shadow-outline
			hover:bg-blue-600 hover:text-white text-xs md:text-base font-normal
			transition duration-500 ease-in-out capitalize">
			{$_('top_navbar.sign_in')}
		</button>

	</a>

</nav>
