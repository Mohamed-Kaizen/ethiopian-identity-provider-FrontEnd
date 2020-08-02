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
		class="container mx-auto flex px-5 py-24 md:flex-row flex-col
		items-center select-none">
		<!-- container -->

		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<!-- Left side -->
			<img
				class="object-cover object-center rounded"
				alt="hero"
				src="{$light_mode ? 'undraw_business_decisions_gjwy.svg/' : 'undraw_business_decisions_gjwy_dark.svg/'}" />
		</div>

		<div
			class="md:w-1/2 flex flex-col lg:flex-grow items-center
			md:items-start text-center {$_('direction') === 'ltr' ? 'lg:pl-24 md:pl-16 md:text-left' : 'lg:mr-32 md:pr-16 md:text-right'}">

			<h1
				class="title-font sm:text-4xl text-3xl mb-4 font-medium
				text-black dark:text-white capitalize">
				{$_('home.business')}
			</h1>

			<p class="mb-8 leading-relaxed text-gray-700 dark:text-gray-400">
				{$_('home.business_sub')}
			</p>

		</div>

	</div>

</section>
