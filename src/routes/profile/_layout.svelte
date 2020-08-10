<script context="module">
	import {isLoading, waitLocale} from "svelte-i18n"
	export async function preload(page) {
		return waitLocale()
	}
</script>

<script>
	export let segment

	import {goto} from "@sapper/app"
	import {_} from "svelte-i18n"

	import {access_token, refresh_token} from "../../store"
	import LeftSideNavBar from "../../components/profile/left_side_navbar.svelte"
	import RightNavBar from "../../components/profile/right_navbar.svelte"

	if (typeof window !== "undefined") {
		access_token.use_local_storage()
		refresh_token.use_local_storage()
		if (!$access_token || !$refresh_token) {
			goto("signin/")
		}
	}
</script>

<div
	style="direction: {$_('direction')}"
	class="h-screen w-full flex overflow-hidden select-none">
	<LeftSideNavBar {segment} />

	<main
		class="lg:py-2 px-5 lg:px-10 flex-1 bg-gray-200 dark:bg-black
		rounded-l-lg transition duration-500 ease-in-out overflow-y-auto">

		<slot />

	</main>

	{#if segment === undefined}
		<RightNavBar />
	{/if}
</div>
