<script>
	import '../app.pcss'
	import Navbar from '$views/Navbar.svelte'
</script>

<div class="bg-background">
	<div class="container mx-auto box-content max-w-screen-lg border-shade pb-48 md:border-x">
		<Navbar />
		<slot />
	</div>
	<div class="flex h-36 -mb-32 flex-col items-center justify-center border-t border-divider bg-shade">
		<span class="text-ink-secondary">© David Han, 2024</span>
	</div>
</div>