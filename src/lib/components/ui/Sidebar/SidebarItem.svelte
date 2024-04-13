<script lang="ts">
	export let selected: boolean = false
	export let href: string
	export let label: string
</script>

<li class="">
	<a
		class="ml-[-1px] pl-4 text-ink-tertiary hover:text-ink {selected
			? 'text-accent'
			: ''} border-l border-l-divider hover:border-l-ink"
		{href}>
		{label}
	</a>
</li>
