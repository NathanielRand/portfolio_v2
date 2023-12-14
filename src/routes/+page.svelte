<script>
	import nathanielrand from '../lib/assets/images/nathanielrand.png';
	import service_development from '$lib/assets/videos/service_development_6.mp4';
	import service_data from '$lib/assets/videos/service_development_8.mp4';
	import service_uiux from '$lib/assets/videos/service_development_4.mp4';

	// import { onMount, onDestroy } from "svelte";

    let scroll = 0;
	let cursorX = 0;
	let cursorY = 0;

</script>
  
<svelte:window bind:scrollY={scroll} />
<!-- <h1 style="color: white;">Scroll Position: {scroll}</h1> -->
<h6 id="side-text-overlay" class="text-primary-50 tracking-widest lg:m-10 lg:mr-35 text-lg lg:text-3xl font-thin underline underline-offset-8 decoration-1">Nathaniel Rand Portfolio</h6>
<!-- Slider indicators
<div class="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
	<button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
	<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
	<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
	<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
	<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
</div> -->

<div class="snap-y snap-mandatory h-screen w-screen overflow-scroll">
	<section id="section-0" data-color="primary-50">
		<div class="snap-center bg-primary-200 h-screen flex items-center justify-center text-8xl">
			<div class="container rounded-xl bg-primary-50 lg:px-36 h-1/2 ring-1 ring-primary-50 ring-offset-8 ring-offset-primary-200">
				<div class="grid grid-cols-2">
					<div>
						<p class="text-5xl my-10 font-light">Full Stack Developer</p>
						<h2 class="text-8xl text-primary-100 font-black tracking-tight hover:text-accent-100 hover:scale-125">Nathaniel <br>Rand</h2>
						<a href="/#section-5" class="text-xl text-primary-200 uppercase border-y-2 py-3 hover:border-accent-100">
							Send Your Inquiry
						</a>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hover:scale-125 text-white mt-8 w-10 h-10">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
						</svg>
					</div>
					<div>
						<img id="myImage" src=https://placehold.co/606x930 class="">
					</div>
					
				</div>
			</div>
		</div>
	</section>
	<section id="section-1" data-color="primary-50">
		<div class="snap-center bg-primary-50 h-screen flex items-center justify-center text-8xl">
			<div class="container lg:px-48 pt-36">
				<h3 class="text-8xl text-accent-100 font-black mb-8 uppercase">About Me</h3>
				<p class="text-4xl text-primary-100 font-extrabold mb-12">
					Over a decade, I've navigated the trenches of large enterprises and helped fuel the fire of several promising startups.
				</p>
				<p class="text-3xl text-primary-100 font-extrabold">
					My passion lies in crafting elegant code that solves real-world problems, 
					like orchestrating a database of nearly half a <custom class="underline underline-offset-8 decoration-accent-100 font-medium">billion</custom> people
					or processing <custom class="underline underline-offset-8 decoration-accent-100 font-medium">millions of dollars</custom> in donations.
				</p>
				
				<div class="grid grid-cols-2 md:grid-cols-4 gap-10 pt-16">
					<div>
						<img class="h-auto max-w-full rounded-lg ring-1 ring-secondary-100 ring-offset-8 ring-offset-primary-50" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="">
					</div>
					<div>
						<img class="h-auto max-w-full rounded-lg ring-1 ring-accent-100 ring-offset-8 ring-offset-primary-50" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
					</div>
					<div>
						<img class="h-auto max-w-full rounded-lg ring-1 ring-primary-100 ring-offset-8 ring-offset-primary-50" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
					</div>
					<div>
						<img class="h-auto max-w-full rounded-lg ring-1 ring-primary-200 ring-offset-8 ring-offset-primary-50" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
					</div>					
				</div>

			</div>
		</div>
	</section>
	<section id="section-2" data-color="primary-100">
		<div class="snap-center bg-accent-100 h-screen flex items-center justify-center text-8xl">
			<div class="grid grid-cols-12 grid-rows-4 gap-0">
				<div class="col-span-12">
					<h3 class="text-6xl font-black text-primary-200 hover:text-primary-100 rounded-xl border-l-4 border-secondary-100 p-4">Services</h3>
				</div>
				<div class="col-span-7 font-black text-secondary-100 hover:text-primary-200 hover:scale-110 pr-12">
					Development
				</div>
				<div class="col-span-5 align-end">
					<!-- <img src=https://placehold.co/500x150 class=""> -->
					<video type="video/mp4" src={service_development} autoplay loop class="h-36 w-full object-fill rounded-xl ring ring-secondary-100 ring-offset-8 ring-offset-accent-100 hover:scale-105"></video>
				</div>
				<div class="col-span-8">
					<!-- <img src=https://placehold.co/800x150 class=""> -->
					<video type="video/mp4" src={service_data} autoplay loop class="h-36 w-full object-fill rounded-xl ring ring-secondary-100 ring-offset-8 ring-offset-accent-100 hover:scale-105"></video>
				</div>
				<div class="col-span-4 font-black text-secondary-100 hover:text-primary-200 text-center hover:scale-110 pt-4">
					Data
				</div>
				<div class="col-span-5 font-black text-secondary-100 hover:text-primary-200 text-center hover:scale-110 pt-8">
					UI/UX
				</div>
				<div class="col-span-7">
					<!-- <img src=https://placehold.co/700x150 class=""> -->
					<video type="video/mp4" src={service_uiux} autoplay loop class="h-36 w-full object-fill rounded-xl ring ring-secondary-100 ring-offset-8 ring-offset-accent-100 hover:scale-105"></video>
				</div>
			</div>
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

</style>
