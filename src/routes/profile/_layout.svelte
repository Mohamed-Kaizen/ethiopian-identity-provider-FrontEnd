<script>
	export let segment

	import {goto} from "@sapper/app"

	import {access_token, refresh_token, user, light_mode} from "../../store"
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

<div class="h-screen w-full flex overflow-hidden select-none">
	<LeftSideNavBar {segment} />

	<main
		class="lg:pt-2 lg:pb-2 lg:px-10 flex-1 bg-gray-200 dark:bg-black
		rounded-l-lg transition duration-500 ease-in-out overflow-y-auto">

		<slot />

	</main>

	{#if segment === undefined}
		<RightNavBar />
	{/if}
</div>
