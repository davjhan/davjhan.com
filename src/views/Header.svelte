<script>
    import ArrowDown20 from 'carbon-icons-svelte/lib/ArrowDown20'

    let cl
    export { cl as class }
</script>
<span class='inline-flex items-center font-semibold text-lg self-start {cl}'>
    <ArrowDown20 class='inline mr-1'/><slot></slot>
</span>