<script>
	import '../app.pcss'
	import Navbar from '$views/Navbar.svelte'
</script>

<svelte:head>
	<title>David Han — Full Stack Software Engineer</title>
	<meta name="description" content="Portfolio of David Han, Full Stack Software Engineer at DoorDash. Web games, SaaS projects, and mobile apps." />
	<meta property="og:title" content="David Han — Full Stack Software Engineer" />
	<meta property="og:description" content="Portfolio of David Han, Full Stack Software Engineer at DoorDash. Web games, SaaS projects, and mobile apps." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="bg-background">
	<div class="container mx-auto box-content max-w-screen-lg border-shade pb-48 md:border-x">
		<Navbar />
		<slot />
	</div>
	<div class="-mb-32 flex h-36 flex-col items-center justify-center border-t border-divider bg-shade">
		<span class="text-ink-secondary">© David Han, 2026</span>
	</div>
</div>
