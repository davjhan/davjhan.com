<script>
	import ChevronRight from 'carbon-icons-svelte/lib/ChevronRight.svelte'

	export let subPath = undefined
</script>

<nav class="flex flex-grow items-center border-b border-divider px-4 py-2">
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
