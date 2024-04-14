<script>
	import portrait from '$assets/img/portrait.png'
	import { Email, LocationFilled, LogoGithub, LogoInstagram, LogoLinkedin, LogoTwitter } from 'carbon-icons-svelte'
	import CursorIcon from '$views/home/CursorIcon.svelte'
</script>

<div class="bg-jumbotron overflow-clip rounded">
	<div class="p-8 pt-12">
		<div class="mb-4 self-start border p-2">
			<h1 class="border-b border-ink-accent font-accent text-4xl font-semibold italic lg:text-7xl">David Han</h1>
			<div
				class="absolute bottom-0 right-0 h-3 w-3 translate-x-1/2 translate-y-1/2 border border-ink bg-white drop-shadow">
			</div>
			<div
				class="absolute right-0 top-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 border border-ink bg-white drop-shadow">
			</div>
			<div
				class="absolute bottom-0 left-0 h-2 w-2 -translate-x-1/2 translate-y-1/2 border border-ink bg-white drop-shadow">
			</div>
			<div
				class="absolute left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 border border-ink bg-white drop-shadow">
			</div>
			<div
				class="z-100 absolute -bottom-1 -right-1 z-50 h-10 translate-x-full translate-y-full stroke-white stroke-2 drop-shadow">
				<CursorIcon />
			</div>
		</div>

		<div class="mb-12">
			<h3 class="text-ink-secondary">
				Full stack Software Engineer at
				<a class="underline" href="https://www.doordash.com/">Doordash</a>
			</h3>
			<h4 class="text-ink-tertiary">
				<LocationFilled class="inline" />
				Seattle, WA
			</h4>
		</div>
		<div class="justify-self-end text-ink-secondary">
			<h3>
				<LogoGithub class="inline" />
				<a class="underline decoration-ink-accent" href="https://github.com/davjhan">davjhan</a>
			</h3>
			<h3>
				<LogoLinkedin class="inline" />
				<a class="underline decoration-ink-accent" href="https://www.linkedin.com/in/davjhan">davjhan</a>
			</h3>
			<a class="underline decoration-ink-accent" href="https://twitter.com/davjhan">
				<h3>
					<LogoTwitter class="inline" />
					davjhan
				</h3>
			</a>
			<h3>
				<LogoInstagram class="inline" />
				<a class="underline decoration-ink-accent" href="https://instagram.com/davjhan">davjhan</a>
			</h3>
			<h3>
				<Email class="inline" />
				davjhan1@gmail.com
			</h3>
			<span class="text-xs text-ink-tertiary">Emails are my preferred method of communication. Let's chat!</span>
		</div>
	</div>
	<div class="absolute -bottom-20 right-0 md:right-20">
		<div class="absolute left-20 h-96 w-40 rotate-45 rounded-full bg-ink-accent opacity-90 blur-3xl md:left-10" />
		<div
			class="rotate-135 absolute -top-40 left-40 h-96 w-80 rounded-full bg-indigo-500 opacity-90 blur-3xl md:left-40" />
		<img alt="portrait" class="  right-0 z-50 w-60 sm:w-80" src={portrait} />
	</div>
</div>

<style>
	.bg-jumbotron {
		@apply bg-transparent;
		background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e5e5' fill-opacity='0.6' fill-rule='evenodd'%3E%3Ccircle cx='4' cy='4' r='4'/%3E%3Ccircle cx='16' cy='16' r='4'/%3E%3C/g%3E%3C/svg%3E");
	}
</style>
