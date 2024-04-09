<script>
    import "../app.pcss"
    import Navbar from "$views/Navbar.svelte";
</script>
<div class='container mx-auto max-w-screen-md pb-48 md:border-l border-r box-content border-shade'>
    <Navbar/>
    <slot/>
</div>
<div class='bg-shade h-36 border-t border-divider flex flex-col items-center justify-center'>
    <span class='text-ink-secondary'>© David Han, 2024</span>
</div>