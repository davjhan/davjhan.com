<script>
	let className = ''
	export { className as class }
</script>

<ul class={className}>
	<div class="mb-2">
		<slot name="header" />
	</div>
	<li class="space-y-2 border-l border-l-divider">
		<slot />
	</li>
</ul>
