<script>
	import directory from '$data/directory.json'
	import SiteView from '$views/SiteView.svelte'
	import Header from '../views/Header.svelte'
</script>

<main class="flex flex-col p-4">
	<div class="h-56 flex-col items-center justify-center">
		<h1 class="border-b-4 border-accent font-bold">David's personal projects</h1>
	</div>
	<Header class="mb-2">Most Recent Project</Header>
	<SiteView site={directory.recent} />
	<Header class="mb-2 mt-12">About me</Header>
	<ul class="ml-8 list-inside list-disc">
		<p>David Han, Software Engineer at Doordash. Based in Seattle, WA.</p>
	</ul>
	<Header class="mb-2 mt-4">Contact me</Header>
	<ul class="ml-8 list-inside list-disc">
		<li>
			Github: <a class="ml-2 font-semibold" href="https://github.com/davjhan">@davjhan</a>
		</li>
		<li>
			Twitter: <a class="ml-2 font-semibold" href="https://twitter.com/davjhan">@davjhan</a>
		</li>
		<li>
			LinkedIn: <a class="ml-2 font-semibold" href="https://linkedin.com/in/davjhan">@davjhan</a>
		</li>
		<li>
			Email: <b>davjhan1@gmail.com</b>
		</li>
	</ul>

	<div class="mt-12">
		<Header class="mb-2">Other Projects</Header>
		{#each directory.projects as site}
			<SiteView {site} />
		{/each}
	</div>
	<Header class="mb-2 mt-4">Mobile Games</Header>
	<ul class="ml-8 list-inside list-disc">
		<p class="mb-2">I also made some mobile games.</p>
		<li>
			<a
				class="font-semibold"
				href="https://play.google.com/store/apps/details?id=com.davidhan.boxes&hl=en_US&gl=US">
				Unbox
			</a>
			(Android)
			<span class="ml-2 text-gray-500">320K Installs.</span>
		</li>
		<li>
			<a
				class="font-semibold"
				href="https://play.google.com/store/apps/details?id=com.davjhan.speedywords&hl=en_US&gl=US">
				Crash Cards
			</a>
			(Android | iOS)
			<span class="ml-2 text-gray-500">65K Installs.</span>
		</li>
		<li>
			<a
				class="font-semibold"
				href="https://play.google.com/store/apps/details?id=com.davjhan.rps&hl=en_US&gl=US">
				RPS Arcade
			</a>
			(Android | iOS)
			<span class="ml-2 text-gray-500">10K Installs.</span>
		</li>
	</ul>

	<div class="h-24"></div>
</main>

<style>
	a {
		@apply underline;
	}
</style>
