<script context="module">
	import {isLoading, waitLocale} from "svelte-i18n"
	export async function preload(page) {
		return waitLocale()
	}
</script>

<script>
	export let segment

	import {stores} from "@sapper/app"

	import {access_token, refresh_token, user, light_mode} from "../store"

	import PreloadingIndicator from "../components/PreloadingIndicator.svelte"
	import TopNavBar from "../components/top_navbar.svelte"
	import BottomNavBar from "../components/bottom_navbar.svelte"

	const {preloading} = stores()

	if (typeof window !== "undefined") {
		access_token.use_local_storage()
		refresh_token.use_local_storage()
		user.use_local_storage()
		light_mode.use_local_storage()
		if (!$light_mode) {
			document.documentElement.classList.add("mode-dark")
			light_mode.set(false)
		} else {
			document.documentElement.classList.remove("mode-dark")
			light_mode.set(true)
		}
	}
</script>

{#if $preloading || $isLoading}
	<PreloadingIndicator />
{/if}

{#if segment === undefined || segment === 'signin'}
	<TopNavBar {light_mode} />

	<slot />
	<BottomNavBar />
{:else}
	<slot />
{/if}
