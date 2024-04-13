<script>
	import directory from '$data/directory.json'
	import SiteView from '$views/SiteView.svelte'
	import Header from '../views/Header.svelte'
	import SidebarItem from '$ui/Sidebar/SidebarItem.svelte'
	import SidebarHeader from '$ui/Sidebar/SidebarHeader.svelte'
	import SidebarSection from '$ui/Sidebar/SidebarSection.svelte'
	import Sidebar from '$ui/Sidebar/Sidebar.svelte'
	import MobileGamesView from '$views/home/MobileGamesView.svelte'
	import { ArrowDown } from 'carbon-icons-svelte'
	import Jumbotron from '$views/home/Jumbotron.svelte'
</script>

<main class="flex flex-col p-4">
	<Jumbotron />
	<div class="flex-row gap-2">
		<!-- Projects -->

		<Sidebar class="sticky top-24 hidden  flex-grow self-start lg:flex">
			<SidebarHeader href="#recent-project">Most recent Project</SidebarHeader>
			<SidebarSection>
				<!-- Sidebar -->
				<SidebarHeader href="#web-projects" slot="header">Web Projects</SidebarHeader>
				{#each directory.projects as site}
					<SidebarItem label={site.title} href="#{site.title}" />
				{/each}
			</SidebarSection>

			<SidebarSection>
				<!-- Sidebar -->
				<SidebarHeader href="#mobile-games" slot="header">Mobile Games</SidebarHeader>
				<SidebarItem href="#mobile-games" label="Unbox" />
				<SidebarItem href="#mobile-games" label="Crash Cards" />
				<SidebarItem href="#mobile-games" label="RPS Arcade" />
			</SidebarSection>
		</Sidebar>
		<div class="max-w-screen-md gap-2">
			<span class="inline-flex scroll-m-24 items-center self-start text-lg font-semibold" id="recent-project">
				<ArrowDown class="mr-1 inline" />
				Most Recent Project
			</span>
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
				<Header class="mb-2" id="web-projects">Web Projects</Header>
				{#each directory.projects as site}
					<SiteView {site} />
				{/each}
			</div>
			<Header class="mb-2 mt-4" id="mobile-games">Mobile Games</Header>
			<MobileGamesView />
		</div>
	</div>

	<div class="h-48"></div>
</main>
