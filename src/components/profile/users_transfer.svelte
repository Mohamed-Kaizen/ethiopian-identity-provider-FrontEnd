<script>
	export let selected_users

	import {quintOut} from "svelte/easing"
	import {crossfade} from "svelte/transition"
	import {flip} from "svelte/animate"

	import axios from "axios"
	import {_, locale} from "svelte-i18n"

	import {access_token} from "../../store.js"

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node)
			const transform = style.transform === "none" ? "" : style.transform

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
			}
		},
	})
	let loading = false,
		users = []

	get_users()

	async function get_users() {
		try {
			loading = true
			let config = {
				headers: {Authorization: `Bearer ${$access_token}`},
			}
			let lang = "en"

			if ("ar" === $locale) {
				lang = "ar"
			}
			if ("am" === $locale) {
				lang = "am"
			}

			const response = await axios.get(
				`https://ethiopia-identity-provider.herokuapp.com/${lang}/api/users/`,
				config
			)
			const data = response.data

			data.forEach((user) => {
				user.is_selected = false
			})

			users = data

			loading = false
		} catch (e) {
			console.log(e.response)
			loading = false
		}
	}

	function remove(user) {
		users = users.filter((t) => t !== user)
	}

	function mark(user, is_selected) {
		user.is_selected = is_selected
		remove(user)
		users = users.concat(user)
		selected_users = users.filter((t) => t.is_selected === true)
	}
</script>

<div
	class="w-full px-3 mb-6 flex flex-col md:flex-row items-center
	justify-between">
	<!-- Container -->

	<div class="mb-3 md:mb-0 h-64 w-56 flex flex-col">
		<!-- Left Side -->

		<div
			class="w-56 py-2 px-4 flex items-center justify-between bg-gray-300
			rounded-t-lg capitalize shadow">
			<!-- Header -->
			<span>{$_('profile.business_owners_users')}</span>
			<span>{users.filter((t) => !t.is_selected).length}</span>

		</div>

		<div class="w-56 h-56 py-2 px-4 shadow overflow-y-auto">
			<!-- List of users -->

			{#each users.filter((t) => !t.is_selected) as user (user.id)}
				<div
					in:receive="{{key: user.id}}"
					out:send="{{key: user.id}}"
					animate:flip
					class="my-4 flex items-center justify-between bg-white
					capitalize text-sm rounded-lg">
					<!-- Card -->

					<div class="flex items-center">

						<img
							class="{$_('direction') === 'ltr' ? 'mr-2' : 'ml-2'}
							h-8 w-8 rounded-full object-cover"
							src="{user.picture}"
							alt="{user.username} profile" />

						<span>{user.username}</span>
					</div>

					<input
						type="checkbox"
						on:change="{() => mark(user, true)}" />

				</div>
			{:else}
				{#if loading}
					<div class="flex flex-col items-center mt-16">
						<div
							class="w-12 h-12 border-4 border-blue-600
							rounded-full loader"></div>
					</div>
				{:else}
					<div class="flex flex-col items-center mt-6">

						<img
							class="h-3/4 w-3/4"
							src="mirage-list-is-empty.png/"
							alt="empty users list" />

					</div>
				{/if}
			{/each}

		</div>

	</div>

	<div class="h-64 w-56 flex flex-col">
		<!-- Right Side -->

		<div
			class="w-56 py-2 px-4 flex items-center justify-between bg-gray-300
			rounded-t-lg shadow capitalize">
			<!-- Header -->
			<span>{$_('profile.business_owners_selected_user')}</span>

			<span>{users.filter((t) => t.is_selected).length}</span>

		</div>

		<div class="w-56 h-56 py-2 px-4 shadow overflow-y-auto">
			<!-- List of users -->

			{#each users.filter((t) => t.is_selected) as user (user.id)}
				<div
					in:receive="{{key: user.id}}"
					out:send="{{key: user.id}}"
					animate:flip
					class="my-4 flex items-center justify-between bg-white
					capitalize text-sm rounded-lg">
					<!-- Card -->
					<div class="flex items-center">

						<img
							class="{$_('direction') === 'ltr' ? 'mr-2' : 'ml-2'}
							h-8 w-8 rounded-full object-cover"
							src="{user.picture}"
							alt="{user.username} profile" />

						<span>{user.username}</span>
					</div>
					<input
						type="checkbox"
						checked
						on:change="{() => mark(user, false)}" />

				</div>
			{:else}
				<div class="flex flex-col items-center mt-10">

					<img
						class="h-3/4 w-3/4"
						src="empty.svg/"
						alt="empty selected users list" />

				</div>
			{/each}

		</div>
	</div>

</div>

<style>
	@keyframes loader-rotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.loader {
		border-right-color: transparent;
		animation: loader-rotate 0.7s linear infinite;
	}
</style>
