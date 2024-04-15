<script>
    import {ArrowRight, Calendar, LogoGithub, Star, StarFilled, View} from 'carbon-icons-svelte'
    import ky from "ky";

    export let data
    const repoName = data.github.split('/').pop()
    let starCount

    async function getStarCount() {
        const res = await ky.get(`https://api.github.com/repos/davjhan/${repoName}`, {
            headers: {
                'User-Agent': 'request',
            }
        }).json()
        return res['stargazers_count']
    }
</script>

<div class="card mb-4 gap-4 p-4 sm:flex-row" id={data.title}>
    <div class="items-start sm:w-96">
        <div class="mb-4 gap-1">
            <a href={data.url} rel="external"><h1 class=" text-2xl font-bold">{data.title}</h1></a>
            {#if data.date}
                <div class="inline-flex flex-row items-center text-ink-tertiary">
                    <Calendar/>
                    <span class="ml-1 whitespace-nowrap text-xs">Released on {data.date}</span>
                </div>
            {/if}
            {#if data.uniqueVisitors}
                <div class="inline-flex flex-row items-center text-ink-tertiary">
                    <View/>
                    <span class="ml-1 whitespace-nowrap text-xs">
						{Intl.NumberFormat('en-US').format(data.uniqueVisitors)} unique visitors
					</span>
                </div>
            {/if}
        </div>
        <p class="py-2 text-sm text-ink-secondary">{data.description}</p>
        <div class="flex-grow"></div>

        <div class="flex-row gap-1">
            <a class="button primary" href={data.url}>
                Visit website
            </a>
            {#if data.github}
                <a class="button block flex-row flex items-center text-sm gap-1 ml-1 mr-0.5" href={data.github}
                   rel="external">
                    <LogoGithub/>
                    Github
                    {#await getStarCount()}
                    {:then count }
                        <span class='text-ink-tertiary'>| {count} <Star class='inline mb-1'/></span>
                    {:catch _}
                    {/await}
                </a>
            {/if}

        </div>
    </div>
    <a class="h-fit shrink sm:w-[400px]" href={data.url}>
        <img
                alt={`thumbnail for ${data.title}`}
                class=" cursor-pointer rounded bg-shade"
                height={data.image.height || 627}
                src={data.image.url}/>
    </a>
</div>
