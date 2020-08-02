<script>
	import {goto} from "@sapper/app"

	import {_} from "svelte-i18n"
	import Lazy from "svelte-lazy"

	import {access_token, refresh_token} from "../store"
	import AuthenticationSection from "../components/authentication_section.svelte"
	import BusinessSection from "../components/business_section.svelte"
	import RenewSection from "../components/renew_section.svelte"

	if ($access_token || $refresh_token) {
		goto("profile/")
	}
</script>

<svelte:head>
	<title>{$_('title.index')}</title>
</svelte:head>

<AuthenticationSection />

<BusinessSection />

<Lazy height="{200}" offset="{150}">

	<RenewSection />

</Lazy>
