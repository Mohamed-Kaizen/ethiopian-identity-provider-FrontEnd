<script>
	import {scale} from "svelte/transition"
	import {goto} from "@sapper/app"

	import Lazy from "svelte-lazy"

	import {light_mode, access_token, refresh_token} from "../store"

	if ($access_token || $refresh_token) {
		goto("profile/")
	}
</script>

<svelte:head>
	<title>Ethiopian Identity Provider</title>
</svelte:head>

<section transition:scale="{{duration: 1000}}">
	<!-- Hero -->

	<div
		class="container mx-auto px-5 py-12 flex md:flex-row flex-col
		items-center">
		<!-- container -->

		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col
			md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
			<!-- Left side -->

			<h1
				class="title-font sm:text-4xl text-3xl mb-4 font-medium
				text-black dark:text-white capitalize">
				use an awesome authenticate system for you apps
			</h1>

			<p class="mb-8 leading-relaxed text-gray-700 dark:text-gray-400">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Doloremque nesciunt assumenda molestiae veniam dolores, officiis
				at doloribus sunt aliquid. Nostrum labore commodi quos possimus
				nesciunt libero autem molestias praesentium adipisci!
			</p>

			<div class="flex justify-center">
				<a
					href="https://ethiopia-identity-provider.herokuapp.com/o/applications/"
					target="blank">

					<button
						class="w-40 p-3 text-center text-white bg-blue-700
						dark:bg-blue-500 -md font-normal rounded-lg capitalize
						shadow transition duration-500 ease-in-out ">
						create your app
					</button>

				</a>
			</div>

		</div>

		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<!-- Right side -->

			<img
				class="object-cover object-center rounded"
				alt="hero"
				src="{$light_mode ? 'undraw_authentication_fsn5.svg/' : 'undraw_authentication_fsn5_dark.svg/'}" />

		</div>

	</div>

</section>

<section transition:scale="{{duration: 1000}}">
	<!-- Hero -->
	<div
		class="container mx-auto flex px-5 py-24 md:flex-row flex-col
		items-center">
		<!-- container -->

		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<!-- Left side -->
			<img
				class="object-cover object-center rounded"
				alt="hero"
				src="{$light_mode ? 'undraw_business_decisions_gjwy.svg/' : 'undraw_business_decisions_gjwy_dark.svg/'}" />
		</div>

		<div
			class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col
			md:items-start md:text-left items-center text-center">

			<h1
				class="title-font sm:text-4xl text-3xl mb-4 font-medium
				text-black dark:text-white capitalize">
				create your own bussiness with couple of clicks
			</h1>

			<p class="mb-8 leading-relaxed text-gray-700 dark:text-gray-400">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Molestiae consequatur cumque amet eaque vitae eius temporibus
				laudantium quis incidunt soluta, reiciendis exercitationem
				dolores blanditiis quo culpa, corporis, quia aperiam obcaecati.
			</p>

		</div>

	</div>

</section>

<Lazy height="{200}" offset="{150}">

	<section transition:scale="{{duration: 1000}}">
		<div class="container px-5 py-24 mx-auto">
			<div
				class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10
				border-gray-200 sm:flex-row flex-col">
				<div
					class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex
					items-center justify-center rounded-full bg-blue-100
					text-blue-500 flex-shrink-0">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="sm:w-16 sm:h-16 w-10 h-10"
						viewBox="0 0 24 24">
						<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
					</svg>
				</div>
				<div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
					<h2
						class="text-gray-900 text-lg title-font font-medium mb-2">
						Shooting Stars
					</h2>
					<p class="leading-relaxed text-base">
						Blue bottle crucifix vinyl post-ironic four dollar toast
						vegan taxidermy. Gastropub indxgo juice poutine.
					</p>
					<a
						href="/"
						class="mt-3 text-blue-500 inline-flex items-center">
						Learn More
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 ml-2"
							viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
			</div>
			<div
				class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10
				border-gray-200 sm:flex-row flex-col">
				<div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
					<h2
						class="text-gray-900 text-lg title-font font-medium mb-2">
						The Catalyzer
					</h2>
					<p class="leading-relaxed text-base">
						Blue bottle crucifix vinyl post-ironic four dollar toast
						vegan taxidermy. Gastropub indxgo juice poutine.
					</p>
					<a
						href="/"
						class="mt-3 text-blue-500 inline-flex items-center">
						Learn More
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 ml-2"
							viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
				<div
					class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20
					sm:ml-10 inline-flex items-center justify-center rounded-full
					bg-blue-100 text-blue-500 flex-shrink-0">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="sm:w-16 sm:h-16 w-10 h-10"
						viewBox="0 0 24 24">
						<circle cx="6" cy="6" r="3"></circle>
						<circle cx="6" cy="18" r="3"></circle>
						<path
							d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
					</svg>
				</div>
			</div>
			<div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
				<div
					class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex
					items-center justify-center rounded-full bg-blue-100
					text-blue-500 flex-shrink-0">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="sm:w-16 sm:h-16 w-10 h-10"
						viewBox="0 0 24 24">
						<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</svg>
				</div>
				<div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
					<h2
						class="text-gray-900 text-lg title-font font-medium mb-2">
						The 400 Blows
					</h2>
					<p class="leading-relaxed text-base">
						Blue bottle crucifix vinyl post-ironic four dollar toast
						vegan taxidermy. Gastropub indxgo juice poutine.
					</p>
					<a
						href="/"
						class="mt-3 text-blue-500 inline-flex items-center">
						Learn More
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 ml-2"
							viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
			</div>
			<button
				class="flex mx-auto mt-20 text-white bg-blue-500 border-0 py-2
				px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
				Button
			</button>
		</div>
	</section>
</Lazy>

<footer class="text-gray-700 body-font">
	<div
		class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
		<a
			href="/"
			class="flex title-font font-medium items-center md:justify-start
			justify-center text-gray-900">

			<svg class="h-8 w-8 fill-current lg:mr-2" viewBox="0 0 480 512">
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

			<span class="ml-3 text-xl">Ethiopian Identity Administrator</span>
		</a>
		<p
			class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2
			sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
			© 2020 Ethiopian Identity Administrator —
			<a
				href="/"
				class="text-gray-600 ml-1"
				rel="noopener noreferrer"
				target="_blank">
				@Ethiopian Identity Administrator
			</a>
		</p>
		<span
			class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center
			sm:justify-start">
			<a href="/" class="text-gray-500">
				<svg
					fill="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-5 h-5"
					viewBox="0 0 24 24">
					<path
						d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0
						011-1h3z"></path>
				</svg>
			</a>
			<a href="/" class="ml-3 text-gray-500">
				<svg
					fill="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-5 h-5"
					viewBox="0 0 24 24">
					<path
						d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86
						3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9
						5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
				</svg>
			</a>
			<a href="/" class="ml-3 text-gray-500">
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-5 h-5"
					viewBox="0 0 24 24">
					<rect
						width="20"
						height="20"
						x="2"
						y="2"
						rx="5"
						ry="5"></rect>
					<path
						d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116
						11.37zm1.5-4.87h.01"></path>
				</svg>
			</a>
			<a href="/" class="ml-3 text-gray-500">
				<svg
					fill="currentColor"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="0"
					class="w-5 h-5"
					viewBox="0 0 24 24">
					<path
						stroke="none"
						d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2
						2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
					<circle cx="4" cy="4" r="2" stroke="none"></circle>
				</svg>
			</a>
		</span>
	</div>
</footer>
