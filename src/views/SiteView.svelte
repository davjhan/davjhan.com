<script>
	import { Calendar } from 'carbon-icons-svelte'

	export let site

	// import Calendar16 from 'carbon-icons-svelte/lib/Calendar16'

	function onclick() {
		window.location.href = site.url
	}
</script>

<svelte:head>
	<script async defer src="https://buttons.github.io/buttons.js"></script>
</svelte:head>
<div class="card mb-4 flex-grow gap-4 p-4" id={site.title}>
	<div class="items-start sm:flex-row">
		<div class="gap-2">
			<a href={site.url} rel="external"><h1 class=" text-2xl font-bold">{site.title}</h1></a>
			<p>{site.description}</p>
		</div>
		<div class="flex-grow"></div>
		<div class="flex-grow flex-row gap-4 sm:flex-col sm:items-end sm:gap-0">
			{#if site.date}
				<div class="inline-flex flex-row items-center text-ink-secondary">
					<Calendar />
					<span class="ml-1 whitespace-nowrap text-xs">{site.date}</span>
				</div>
			{/if}
			{#if site.github}
				<div class="mt-2 inline-flex flex-row items-start">
					<a rel="external" href={site.github} class="text-gray-dark ml-1 mr-2 text-xs underline">Github</a>
					<!-- Place this tag where you want the button to render. -->
					<a class="github-button" href={site.github} data-show-count="true" aria-label="Star on GitHub">
						Star
					</a>
				</div>
			{/if}
		</div>
	</div>
	<button on:click={onclick}>
		<img
			alt={`thumbnail for ${site.title}`}
			class=" bg-gray-light mt-2 cursor-pointer rounded"
			height={site.image.height || 627}
			src={site.image.url}
			width={site.image.width || 1200} />
	</button>
</div>
