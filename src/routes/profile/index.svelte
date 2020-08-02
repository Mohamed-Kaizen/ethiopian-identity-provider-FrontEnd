<script>
	import {fly} from "svelte/transition"
	import {_} from "svelte-i18n"

	import {user} from "../../store.js"
	import AcceptedList from "../../components/profile/accepted_list.svelte"
	import AwaitedList from "../../components/profile/awaited_list.svelte"
</script>

<svelte:head>
	<title>{$_('profile.index')} | {$_('title.index')}</title>
</svelte:head>

<div
	in:fly="{{y: -200, duration: 1000}}"
	class="flex flex-col capitalize text-3xl dark:text-gray-400">

	<span class="font-semibold">{$_('profile.hello')}</span>

	<span>{$user.username}</span>

</div>

<h3
	in:fly="{{x: $_('direction') === 'ltr' ? -200 : 200, duration: 1000}}"
	class="mt-8 text-xl font-semibold capitalize dark:text-gray-400">
	{$_('profile.businesses')}
</h3>

<div class="flex flex-col lg:flex-row">

	<AcceptedList />

	<AwaitedList />

</div>
