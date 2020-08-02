<script>
	import {_, locale} from "svelte-i18n"

	import Saudi from "../components/saudi_flag.svelte"
	import UK from "../components/uk_flag.svelte"
</script>

<nav
	class="w-full flex md:hidden overflow-x-auto fixed bottom-0 shadow bg-white
	dark:text-gray-400 dark:bg-gray-800">

	<button
		on:click="{() => {
			locale.set('ar')
		}}"
		class="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out {$locale === 'ar' ? 'bg-gray-200 dark:bg-gray-600 text-red-600 dark:text-red-300' : ''}">

		<Saudi />

		<span class="text-sm capitalize">{$_('languages.ar')}</span>

	</button>

	<button
		on:click="{() => {
			locale.set('en-US')
		}}"
		class="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out {$locale === 'en-US' ? 'bg-gray-200 dark:bg-gray-600 text-red-600 dark:text-red-300' : ''}">

		<UK />

		<span class="text-sm capitalize">{$_('languages.en')}</span>

	</button>

</nav>
