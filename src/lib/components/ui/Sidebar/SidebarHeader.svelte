<script lang="ts">
	export let href: string
</script>

<li class="font-semibold text-ink-secondary">
	<a {href}>
		<slot />
	</a>
</li>
