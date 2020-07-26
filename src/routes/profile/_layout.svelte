<script>
	export let segment

	import {goto} from "@sapper/app"

	import {access_token, refresh_token, user, light_mode} from "../../store"
	import LeftSideNavBar from "../../components/profile/left_side_navbar.svelte"

	if (typeof window !== "undefined") {
		if (!$access_token || !$refresh_token) {
			goto("signin/")
		}
	}
</script>

<div class="h-screen w-full flex overflow-hidden select-none">
	<LeftSideNavBar {segment} />

	<slot />

</div>
