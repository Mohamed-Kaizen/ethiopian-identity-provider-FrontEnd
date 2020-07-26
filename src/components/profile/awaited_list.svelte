<script>
	import {fly} from "svelte/transition"
</script>

<div
	in:fly="{{y: 200, duration: 2000}}"
	class="h-106 w-full lg:w-1/2 mt-8 mr-6 py-2 flex-shrink-0 flex flex-col
	bg-purple-300 rounded-lg text-white overflow-y-auto">

	<h3 class="flex items-center pt-1 pb-1 px-8 text-lg font-bold capitalize">
		<!-- Header -->

		<span>Awaited</span>

	</h3>

	<div class="flex flex-col items-center mt-12">

		<img src="empty.png/" alt="empty awaited list" />

	</div>

</div>
