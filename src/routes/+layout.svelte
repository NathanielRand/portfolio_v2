<script>
    import "../app.pcss";
</script>

<nav class="fixed w-full z-20 top-0 start-0 nav-neumorphism">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <!-- <a href="/#section-0" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-4xl font-black whitespace-nowrap text-white tracking-wide">RAND</span>
        </a> -->
        <div class="text-neumorphism font-black text-6xl md:text-5xl lg:text-8xl subpixel-antialiased">RAND</div>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="/#section-7" type="button" class="neumorphism hidden md:block text-black opacity-60 hover:bg-primary-100 font-black uppercase tracking-widest rounded-full lg:text-2xl px-5 py-4 text-center">Contact</a>
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
                    <a href="/#section-1" class="block py-2 px-3 font-extrabold lg:text-3xl text-black opacity-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">About</a>
                </li>
                <li>
                    <a href="/#section-2" class="block py-2 px-3 font-extrabold lg:text-3xl text-black opacity-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">Portfolio</a>
                </li>
                <li>
                    <a href="/#section-3" class="block py-2 px-3 font-extrabold lg:text-3xl text-black opacity-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">Testimonials</a>
                </li>                
            </ul>
        </div>
    </div>
</nav>
  
<slot></slot>

<style>
    /* Navbar */
    nav {
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

    .text-neumorphism {
        color: var(--colorMain);
        letter-spacing: 0.03em;
        text-transform: uppercase;
        text-shadow: var(--brShadow), 
                    var(--tlShadow);
        position: relative;
        
        &::before, &::after {
            position: absolute;
            background: var(--colorMain);
            content: '';
            border-radius: 10%;
        
        }
    }

</style>