<script>
	import {scale} from "svelte/transition"
	import {_} from "svelte-i18n"
	import {light_mode} from "../store"
</script>

<section
	style="direction: {$_('direction')}"
	transition:scale="{{duration: 1000}}">
	<!-- Hero -->

	<div
		class="container mx-auto px-5 py-12 flex md:flex-row flex-col
		items-center select-none">
		<!-- container -->

		<div
			class="md:w-1/2 mb-16 md:mb-0 lg:pr-24 md:pr-16 flex flex-col
			lg:flex-grow items-center md:items-start text-center {$_('direction') === 'ltr' ? 'md:text-left' : 'md:text-right'}">
			<!-- Left side -->

			<h1
				class="title-font sm:text-4xl text-3xl mb-4 font-medium
				text-black dark:text-white capitalize">
				{$_('home.auth')}
			</h1>

			<p
				style="direction: {$_('direction')}"
				class="w-3/4 mb-8 text-gray-700 dark:text-gray-400">
				{$_('home.auth_sub')}
			</p>

			<div class="flex justify-center">

				<a
					href="https://ethiopia-identity-provider.herokuapp.com/o/applications/"
					target="blank">

					<button
						class="w-40 p-3 text-center text-white bg-blue-700
						dark:bg-blue-500 -md font-normal rounded-lg capitalize
						shadow transition duration-500 ease-in-out ">
						{$_('home.action')}
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
