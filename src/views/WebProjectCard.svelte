<script>
	import { ArrowRight, Calendar, View } from 'carbon-icons-svelte'

	export let data
</script>

<svelte:head>
	<script async defer src="https://buttons.github.io/buttons.js"></script>
</svelte:head>
<div class="card mb-4 gap-4 p-4 sm:flex-row" id={data.title}>
	<div class="items-start sm:w-96">
		<div class="mb-4 gap-1">
			<a href={data.url} rel="external"><h1 class=" text-2xl font-bold">{data.title}</h1></a>
			{#if data.date}
				<div class="inline-flex flex-row items-center text-ink-tertiary">
					<Calendar />
					<span class="ml-1 whitespace-nowrap text-xs">Released on {data.date}</span>
				</div>
			{/if}
			{#if data.uniqueVisitors}
				<div class="inline-flex flex-row items-center text-ink-tertiary">
					<View />
					<span class="ml-1 whitespace-nowrap text-xs">
						{Intl.NumberFormat('en-US').format(data.uniqueVisitors)} unique visitors
					</span>
				</div>
			{/if}
			{#if data.github}
				<div class="inline-flex flex-row">

					<!-- Place this tag where you want the button to render. -->
					<a class="github-button" href={data.github} data-show-count="true" aria-label="Star on GitHub">
						Star
					</a>
					<a rel="external" href={data.github} class="text-gray-dark ml-1 mr-2 text-sm underline">
						View in Github
					</a>
				</div>
			{/if}
		</div>
		<p class="py-4 text-sm text-ink-secondary">{data.description}</p>
		<div class="flex-grow"></div>

		<div class="gap-2">
			<a class="button primary" href={data.url}>
				Visit website
				<ArrowRight class="mb-0.5 ml-2 inline" />
			</a>

		</div>
	</div>
	<a class="h-fit shrink sm:w-[400px]" href={data.url}>
		<img
			alt={`thumbnail for ${data.title}`}
			class=" cursor-pointer rounded bg-shade"
			height={data.image.height || 627}
			src={data.image.url} />
	</a>
</div>
