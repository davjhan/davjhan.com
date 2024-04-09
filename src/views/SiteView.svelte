<script>
    import {Calendar} from "carbon-icons-svelte";

    export let site

    // import Calendar16 from 'carbon-icons-svelte/lib/Calendar16'

    function onclick() {
        window.location.href = site.url
    }
</script>
<svelte:head>
    <script async defer src='https://buttons.github.io/buttons.js'></script>
</svelte:head>
<div class='card p-4 flex-grow mb-4 gap-4'>
    <div class='sm:flex-row items-start '>
        <div class='gap-2'>
            <a href={site.url} rel='external'><h1 class=' text-2xl font-bold'>{site.title}</h1></a>
            <p>{site.description}</p>
        </div>
        <div class='flex-grow'></div>
        <div class='flex-row sm:flex-col gap-4 sm:gap-0 sm:items-end flex-grow '>
            {#if site.date}
                <div class='flex-row inline-flex items-center text-ink-secondary'>
                    <Calendar/>
                    <span class='text-xs ml-1 whitespace-nowrap'>{site.date}</span>
                </div>

            {/if}
            {#if site.github}
                <div class='flex-row inline-flex items-start mt-2'>
                    <a rel='external' href={site.github} class='ml-1 mr-2 underline text-gray-dark text-xs'>Github</a>
                    <!-- Place this tag where you want the button to render. -->
                    <a class='github-button' href={site.github} data-show-count='true'
                       aria-label='Star on GitHub'>Star</a>
                </div>
            {/if}
        </div>

    </div>
    <button on:click={onclick}>
        <img alt={`thumbnail for ${site.title}`}
             class=' rounded mt-2 cursor-pointer bg-gray-light'
             height={site.image.height || 627}
             src={site.image.url}
             width={site.image.width || 1200}>
    </button>


</div>