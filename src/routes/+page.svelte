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
	<div class="items-center gap-1 py-16 font-accent">
		<h1 class="">I make games!</h1>
		<h3 class="italic">Check out my personal projects <ArrowDown class="mb-2 inline" size={24} /></h3>
	</div>
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
		<div class="gap-2 lg:max-w-screen-md">
			<span class="inline-flex scroll-m-24 items-center self-start text-lg font-semibold" id="recent-project">
				<ArrowDown class="mr-1 inline" />
				Most Recent Project
			</span>
			<SiteView site={directory.recent} />

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
