<script>
	import directory from '$data/directory.json'
	import SidebarItem from '$ui/Sidebar/SidebarItem.svelte'
	import SidebarHeader from '$ui/Sidebar/SidebarHeader.svelte'
	import SidebarSection from '$ui/Sidebar/SidebarSection.svelte'
	import Sidebar from '$ui/Sidebar/Sidebar.svelte'
	import MobileGamesView from '$views/home/MobileGamesView.svelte'
	import { ArrowDown, CheckmarkFilled } from 'carbon-icons-svelte'
	import Jumbotron from '$views/home/Jumbotron.svelte'
	import WebGameCard from '$views/WebGameCard.svelte'
</script>

<main class="flex flex-col p-4">
	<Jumbotron />
	<div class="items-center gap-1 py-16 font-accent">
		<h1 class="">I make games!</h1>
		<h3 class="italic">
			Check out my personal projects
			<ArrowDown class="mb-2 inline" size={24} />
		</h3>
	</div>
	<div class="flex-row gap-2">
		<!-- Projects -->

		<Sidebar class="sticky top-12 mt-24 hidden flex-grow self-start lg:flex">
			<SidebarSection>
				<SidebarHeader href="#web-games" slot="header">Web Games</SidebarHeader>
				{#each directory.webGames as site}
					<SidebarItem label={site.title} href="#{site.title}" />
				{/each}
			</SidebarSection>
			<SidebarSection>
				<SidebarHeader href="#web-sites" slot="header">Websites</SidebarHeader>
				{#each directory.webSites as site}
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
			<div class="mt-12 gap-24">
				<div class="gap-2" id="web-games">
					<div class="mb-4 mb-8 gap-2">
						<h1>Web Games</h1>
						<p>Simple, easy-to-learn mini games. I just make these for fun.</p>
						<hr />
						<ul class="ml-4 py-2">
							<li>
								<CheckmarkFilled class="mb-1 mr-2 inline" size={24} />
								No Signup required.
							</li>
							<li>
								<CheckmarkFilled class="mb-1 mr-2 inline" size={24} />
								No ads.
							</li>
							<li>
								<CheckmarkFilled class="mb-1 mr-2 inline" size={24} />
								Mobile friendly.
							</li>
						</ul>
					</div>
					{#each directory.webGames as game}
						<WebGameCard data={game} />
					{/each}
				</div>
				<div class="gap-2" id="web-games">
					<div class="mb-4 mb-8 gap-2" id="web-sites">
						<h1>Websites</h1>
						<p>Small SaaS projects.</p>
						<hr />
					</div>
					{#each directory.webSites as site}
						<WebGameCard data={site} />
					{/each}
				</div>
				<div>
					<div class="mb-8" id="mobile-games">
						<h1 class="mb-2 mt-4">Mobile Games</h1>
						<p class="mb-2">
							I also made some mobile games. (But these have all been removed from the app store)
						</p>
						<hr />
					</div>
					<MobileGamesView />
				</div>
			</div>
		</div>
	</div>

	<div class="h-32"></div>
</main>
