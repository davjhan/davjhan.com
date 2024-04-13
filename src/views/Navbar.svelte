<script>
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte'

	export let subPath = undefined
</script>

<nav class="sticky top-0 z-50 flex flex-grow items-center border-b border-shade bg-background px-4 py-4">
	<a class="inline-flex items-center font-bold hover:underline active:underline" href="https://davjhan.com">
		<svg class="mr-1 inline-block" height="16" width="16">
			<circle cx="8" cy="8" fill="#ffd803" r="6" stroke="black" stroke-width="2" />
		</svg>
		<span class="inline-block">davjhan.com</span>
	</a>
	{#if subPath}
		<ChevronRight class="ml-2" />
		<a class="text-gray-dark ml-2 hover:underline active:underline" href="/">{subPath}</a>
	{/if}
	<div class="flex-grow"></div>
</nav>
