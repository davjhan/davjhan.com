<script context='module'>

    import directory from '$data/directory.json'
    import SiteView from '$views/SiteView.svelte'
    import Header from '../views/Header.svelte'
    import SiteCard from "$views/SiteCard.svelte"
</script>
<style>
    a {
        @apply underline;
    }
</style>
<main class='p-4 flex flex-col '>
    <div class='flex-col items-center justify-center h-48'>
        <h1 class='sm:text-3xl md:text-4xl border-b-4 border-accent font-bold'>
            David's personal projects
        </h1>
    </div>
    <Header class='mb-2'>Most Recent Project</Header>
    <SiteCard site={directory.recent}/>
    <Header class='mt-12 mb-2'>About me</Header>
    <ul class='list-disc list-inside ml-8'>
        <p>Software Engineer at Doordash in Seattle, WA.</p>
    </ul>
    <Header class='mt-4 mb-2'>Contact me</Header>
    <ul class='list-disc list-inside ml-8'>
        <li>Github: <a class='font-semibold ml-2' href='https://github.com/davjhan'>@davjhan</a></li>
        <li>Twitter: <a class='font-semibold ml-2' href='https://twitter.com/davjhan'>@davjhan</a></li>
        <li>LinkedIn: <a class='font-semibold ml-2' href='https://linkedin.com/in/davjhan'>@davjhan</a></li>
        <li>Email: <b>davjhan1@gmail.com</b></li>
    </ul>

    <div class='mt-12'>
        <Header class='mb-2'>Other Projects</Header>
        {#each directory.projects as site}
            <SiteView {site}/>
        {/each}
    </div>
    <Header class='mt-4 mb-2'>Mobile Games</Header>
    <ul class='list-disc list-inside ml-8'>
        <p class='mb-2'>I also made some mobile games.</p>
        <li>
            <a class='font-semibold'
               href='https://play.google.com/store/apps/details?id=com.davidhan.boxes&hl=en_US&gl=US'>Unbox</a>
            (Android) <span class='text-gray-500 ml-2'>320K Installs.</span>
        </li>
        <li>
            <a class='font-semibold'
               href='https://play.google.com/store/apps/details?id=com.davjhan.speedywords&hl=en_US&gl=US'>Crash
                Cards</a>
            (Android | iOS) <span class='text-gray-500 ml-2'>65K Installs.</span>
        </li>
        <li>
            <a class='font-semibold'
               href='https://play.google.com/store/apps/details?id=com.davjhan.rps&hl=en_US&gl=US'>RPS Arcade</a>
            (Android | iOS) <span class='text-gray-500 ml-2'>10K Installs.</span>
        </li>
    </ul>

    <div class='h-24'></div>
</main>