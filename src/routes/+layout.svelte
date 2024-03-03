<script>
    import "../app.pcss";
</script>

<nav class="fixed w-full z-20 top-0 start-0 nav-neumorphism">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="text-neumorphism font-black text-6xl md:text-5xl lg:text-8xl subpixel-antialiased">RAND</a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="/#contact" type="button" class="neumorphism hidden md:block text-white hover:bg-primary-100 font-black uppercase tracking-widest rounded-full lg:text-3xl px-5 py-4 text-center">Contact</a>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5 text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 uppercase" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent dark:border-white">
                <li>
                    <a href="/#about" class="block py-2 px-3 font-light lg:text-4xl text-black opacity-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">About</a>
                </li>
                <li>
                    <a href="/#work" class="block py-2 px-3 font-light lg:text-4xl text-black opacity-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">Work</a>
                </li>
                <li>
                    <a href="/#testimonials" class="block py-2 px-3 font-light lg:text-4xl text-black opacity-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">Testimonials</a>
                </li>                
            </ul>
        </div>
    </div>
</nav>
  
<slot></slot>

<footer>
    <svg class="mx-auto" width="6em" height="6em" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml:space="preserve" transform="scale(-1, 1)">
        <path fill="#4e4e4e" fill-opacity="1" stroke-linejoin="round" d="M 44.5,18.5C 45.8807,18.5 47,20.2909 47,22.5C 47,24.7091 45.8807,26.5 44.5,26.5C 43.1193,26.5 42,24.7091 42,22.5C 42,20.2909 43.1193,18.5 44.5,18.5 Z M 39.25,19.75C 40.0784,19.75 40.75,20.8693 40.75,22.25C 40.75,23.6307 40.0784,24.75 39.25,24.75C 38.4216,24.75 37.75,23.6307 37.75,22.25C 37.75,20.8693 38.4216,19.75 39.25,19.75 Z M 35,21C 35.8284,21 36.5,21.8954 36.5,23C 36.5,24.1046 35.8284,25 35,25C 34.1716,25 33.5,24.1046 33.5,23C 33.5,21.8954 34.1716,21 35,21 Z M 31.5,23.25C 32.3284,23.25 33,24.1454 33,25.25C 33,26.3546 32.3284,27.25 31.5,27.25C 30.6716,27.25 30,26.3546 30,25.25C 30,24.1454 30.6716,23.25 31.5,23.25 Z M 28.75,26.75C 29.3023,26.75 29.75,27.4216 29.75,28.25C 29.75,29.0784 29.3023,29.75 28.75,29.75C 28.1977,29.75 27.75,29.0784 27.75,28.25C 27.75,27.4216 28.1977,26.75 28.75,26.75 Z M 34,27.5C 43,23 49.2428,31.3086 42,40C 37,46 51.1334,55.5428 42,57.5C 35,59 37.1925,49.8978 35,46C 26,30 34,27.5 34,27.5 Z "/>
    </svg>    
</footer>

<style>
    /* Navbar */
    nav, footer {
        background: #c4c4c4;
    }
    /* Neumorphism */
	.neumorphism {
		border-radius: 50px;
		background: #c4c4c4;
		box-shadow:  -6px 6px 12px #a7a7a7,
					6px -6px 12px #e1e1e1;
	}

	.neumorphism:hover {
		border-radius: 50px;
		background: #c4c4c4;
		box-shadow: inset -6px 6px 12px #a7a7a7,
            inset 6px -6px 12px #e1e1e1;
	}
    .nav-neumorphism {
        background: #c4c4c4;
        box-shadow: -6px 6px 12px #a7a7a7,
                    6px -6px 12px #e1e1e1;
    }

    :root {
    --colorMain: #d2d2d2;
    --brShadow: -6px 6px 15px rgba(0,0,0,0.5);
    --tlShadow: 6px -6px 15px rgba(255,255,255,0.8);
    }

    /* Neumorphism Text */
    .text-neumorphism {
        color: var(--colorMain);
        letter-spacing: 0.03em;
        text-transform: uppercase;
        text-shadow: var(--brShadow), 
                    var(--tlShadow);
        position: relative;
    }

    .text-neumorphism::before,
    .text-neumorphism::after {
        position: absolute;
        background: var(--colorMain);
        content: '';
        border-radius: 10%;
    }

</style>