<script>
	import nathanielrand from '../lib/assets/images/nathanielrand.png';

    let scroll = 0;
</script>
  
<svelte:window bind:scrollY={scroll} />
<!-- <h1 style="color: white;">Scroll Position: {scroll}</h1> -->
<h6 id="side-text-overlay" class="text-primary-50 tracking-widest lg:m-10 lg:mr-35 text-lg lg:text-3xl font-thin">Nathaniel Rand Portfolio</h6>

<div class="snap-y snap-mandatory h-screen w-screen overflow-scroll">
	<section id="section-1" data-color="primary-50">
		<div class="snap-center bg-primary-200 h-screen flex items-center justify-center text-8xl">
			<div class="container bg-primary-50 lg:px-36 py-24">
				<div class="grid grid-cols-2">
					<div>
						<p class="text-5xl mb-10 font-light">Full Stack Developer</p>
						<h2 class="text-8xl text-primary-100 font-extrabold tracking-tight">Nathaniel <br>Rand</h2>
						<a href="/#section-5" class="text-xl uppercase border-y-2 py-3 hover:border-primary-100">
							Send Your Inquiry
						</a>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-8">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
						</svg>
					</div>
					<div>
						<img id="headshot" src={nathanielrand}>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="section-1" data-color="primary-50">
		<div class="snap-center bg-primary-200 h-screen flex items-center justify-center text-8xl">
			<h3 class="text-5xl text-primary-50 font-thin">About Me</h3>
		</div>
	</section>
	<section id="section-2" data-color="primary-100">
		<div class="snap-center bg-accent-100 h-screen flex items-center justify-center text-8xl">
			<h3 class="text-5xl text-primary-100 font-thin">Service</h3>
		</div>
	</section>
	<section id="section-3" data-color="secondary-100">
		<div class="snap-center bg-primary-100 h-screen flex items-center justify-center text-8xl">
			<h3 class="text-5xl text-secondary-100 font-thin">Work</h3>
		</div>
	</section>
	<section id="section-4" data-color="primary-200">
		<div class="snap-center bg-secondary-100 h-screen flex items-center justify-center text-8xl">
			<h3 class="text-5xl text-primary-200 font-thin">Testimonials</h3>
		</div>
	</section>
	<section id="section-5" data-color="accent-100">
		<div class="snap-center bg-primary-50 h-screen flex items-center justify-center text-8xl">
			<h3 class="text-5xl text-accent-100 font-thin">Contact</h3>
		</div>
	</section>
</div>

<style>
	/* h5 {
		position: fixed;
		z-index: 10;
		top: 20px;
		left: 20px;
		font-size: 24px;
	} */

	#side-text-overlay {
		position: fixed;
		z-index: 10;
		bottom: 20px;
		right: 20px;
		writing-mode: vertical-rl;
	}

	#headshot {
		/* width: 100%; */
		height: 150%;
	}

</style>
