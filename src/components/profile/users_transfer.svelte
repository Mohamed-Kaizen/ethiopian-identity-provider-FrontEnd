<script>
	export let selected_users

	import {quintOut} from "svelte/easing"
	import {crossfade} from "svelte/transition"
	import {flip} from "svelte/animate"

	import {_} from "svelte-i18n"

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
	let users = []

	get_users()

	function get_users() {
		const data = [
			{
				id: 1,
				username: "mila kunis",
				picture:
					"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/0909-mila-kunis-1445035501.jpg",
			},
			{
				id: 2,
				username: "barbossa",
				picture:
					"https://static0.srcdn.com/wordpress/wp-content/uploads/2017/05/Geoffery-Rush-as-Hector-Barbossa-in-Pirates-of-the-Caribbean.jpg?q=50&fit=crop&w=740&h=370",
			},
			{
				id: 3,
				username: "carla",
				picture: "https://data.whicdn.com/images/341568668/original.jpg",
			},
			{
				id: 4,
				username: "bugs bunny",
				picture:
					"https://vignette.wikia.nocookie.net/christmasspecials/images/3/3a/Bugs_in_Bah_Humduck.jpg/revision/latest?cb=20181226001516",
			},
		]

		data.forEach((user) => {
			user.is_selected = false
		})

		users = data
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
			rounded-t-lg capitalize">
			<!-- Header -->
			<span>{$_('profile.business_owners_users')}</span>
			<span>{users.filter((t) => !t.is_selected).length}</span>

		</div>

		<div class="w-56 h-56 py-2 px-4 border overflow-y-auto">
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
				<div class="flex flex-col items-center mt-6">

					<img
						class="h-3/4 w-3/4"
						src="mirage-list-is-empty.png/"
						alt="empty users list" />

				</div>
			{/each}

		</div>

	</div>

	<div class="h-64 w-56 flex flex-col">
		<!-- Right Side -->

		<div
			class="w-56 py-2 px-4 flex items-center justify-between bg-gray-300
			rounded-t-lg capitalize">
			<!-- Header -->
			<span>{$_('profile.business_owners_selected_user')}</span>

			<span>{users.filter((t) => t.is_selected).length}</span>

		</div>

		<div class="w-56 h-56 py-2 px-4 border overflow-y-auto">
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
