<script>
	import { Calendar, LogoGithub, View } from 'carbon-icons-svelte'

	export let data
</script>

<div class="card mb-4 gap-4 p-4 sm:flex-row" id={data.title}>
	<div class="sm:w-96">
		<div class="mb-4 grow gap-1">
			<a href={data.url} rel="noopener noreferrer" class="border-b border-shade">
				<h1 class="text-2xl font-bold">{data.title}</h1>
			</a>

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
		</div>
		<p class="py-2 text-sm text-ink-secondary">{data.description}</p>
		<div class="flex-grow"></div>

		<div class="flex-row gap-1">
			<a class="button primary" href={data.url} rel="noopener noreferrer">Visit website</a>
			{#if data.github}
				<a
					class="button ml-1 mr-0.5 block flex flex-row items-center gap-1 text-sm"
					href={data.github}
					rel="noopener noreferrer">
					<LogoGithub />
					Github
				</a>
			{/if}
		</div>
	</div>
	<div class="flex flex-col gap-1">
		<a href={data.url} rel="noopener noreferrer">
			<img
				alt={`thumbnail for ${data.title}`}
				class="h-fit shrink cursor-pointer rounded bg-shade sm:w-[400px]"
				height={data.image.height || 627}
				src={data.image.url} />
		</a>
		<span class="self-end text-xs text-ink-tertiary">{data.url}</span>
	</div>
</div>
