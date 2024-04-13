<script lang="ts">
	import ArrowDown20 from 'carbon-icons-svelte/lib/ArrowDown.svelte'

	export let id: string | undefined = undefined
	let cl
	export { cl as class }
</script>

<span class="inline-flex items-center self-start text-lg font-semibold {cl}" {id}>
	<ArrowDown20 class="mr-1 inline" />
	<slot />
</span>
