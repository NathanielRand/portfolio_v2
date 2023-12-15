<script>
    import "../app.pcss";
</script>

<nav class="bg-transparent fixed w-full z-20 top-0 start-0 border-b border-transparent">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/#section-0" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-4xl font-black whitespace-nowrap text-white tracking-wide">RAND</span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="/#section-5" type="button" class="text-white border border-primary-50 hover:bg-primary-100 font-bold uppercase tracking-widest rounded-full text-sm px-5 py-2.5 text-center">Contact</a>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 uppercase" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent dark:border-white">
                <li>
                    <a href="/#section-1" class="block py-2 px-3 font-extrabold text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-100 md:p-0">About</a>
                </li>
                <li>
                    <a href="/#section-2" class="block py-2 px-3 font-extrabold text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-100 md:p-0">Services</a>
                </li>
                <li>
                    <a href="/#section-3" class="block py-2 px-3 font-extrabold text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-100 md:p-0">Work</a>
                </li>
                <li>
                    <a href="/#section-4" class="block py-2 px-3 font-extrabold text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-100 md:p-0">Testimonials</a>
                </li>                
            </ul>
        </div>
    </div>
</nav>
  
<slot></slot>