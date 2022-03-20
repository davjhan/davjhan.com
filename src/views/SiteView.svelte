<script>
    export let site
    import Calendar16 from 'carbon-icons-svelte/lib/Calendar16'

    function onclick() {
        window.location.href = site.url
    }
</script>
<svelte:head>
    <script async defer src='https://buttons.github.io/buttons.js'></script>
</svelte:head>
<div class='flex-col card p-4 flex-grow mb-4'>
    <div class='flex-col sm:flex-row items-start'>
        <div class='flex-col items-start'>
            <a href={site.url} rel='external'><h1 class=' text-2xl font-bold'>{site.title}</h1></a>
            <p class='pt-1'>{site.description}</p>
        </div>
        <div class='flex-grow'></div>
        <div class='flex-row sm:flex-col gap-4 sm:gap-0 sm:items-end flex-grow '>
            {#if site.date}
                <div class='flex-row inline-flex  items-center text-gray-dark'>
                    <Calendar16/>
                    <span class='ml-1 whitespace-nowrap'>{site.date}</span>
                </div>

            {/if}
            {#if site.github}
                <div class='flex-row inline-flex items-start mt-2'>
                    <a rel='external' href={site.github} class='ml-1 mr-2 underline text-gray-dark text-sm'>Github</a>
                    <!-- Place this tag where you want the button to render. -->
                    <a class='github-button' href={site.github} data-show-count='true'
                       aria-label='Star on GitHub'>Star</a>
                </div>
            {/if}
        </div>

    </div>

    <img alt='thumbnail' class='border-2 border-black rounded mt-2 cursor-pointer bg-gray-light'
         height={site.image.height || 627} on:click={onclick}
         src={site.image.url}
         width={site.image.width || 1200}>

</div>