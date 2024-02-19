<script>
    import { onMount } from 'svelte';
    
    let sections = [];
    let navigation;
  
    onMount(() => {
      const scrollToSection = (e) => {
        const dots = Array.from(navigation.children);
        const window_height = window.innerHeight;
  
        dots.forEach((dot, index) => {
          if (dot === e.target) {
            window.scrollTo({
              top: window_height * index,
              behavior: 'smooth',
            });
          }
        });
      };
  
      const setDotStatus = () => {
        const scroll_position = window.scrollY;
        const dots = Array.from(navigation.children);
  
        sections.forEach((section, index) => {
          const half_window = window.innerHeight / 2;
          const section_top = section.offsetTop;
  
          if (scroll_position > section_top - half_window && scroll_position < section_top + half_window) {
            removeDotStyles();
            dots[index].classList.add('is-active');
          }
        });
      };
  
      const removeDotStyles = () => {
        const dots = navigation;
        const is_active = dots.querySelector('.is-active');
  
        if (is_active !== null) {
          is_active.classList.remove('is-active');
        }
      };
  
      navigation.addEventListener('click', scrollToSection);
      window.addEventListener('scroll', setDotStatus);
  
      return () => {
        navigation.removeEventListener('click', scrollToSection);
        window.removeEventListener('scroll', setDotStatus);
      };
    });
  </script>
  
  <main class="main bg-black">
	<section class="section">
		<h2 class="section__heading">Scroll up and down</h2>
	</section>
	<section class="section">
		<h2 class="section__heading">Click on the nav dots</h2>
	</section>
	<section class="section">
		<h2 class="section__heading">Smooth scrolling</h2>
	</section>
	<section class="section">
		<h2 class="section__heading">Well done!</h2>
	</section>
</main>
  
  <ul class="nav-dots" bind:this={navigation}>
    {#each Array.from({ length: sections.length }) as _, index}
      <li
        class="nav-dot"
        on:click={() => window.scrollTo({
          top: window.innerHeight * index,
          behavior: 'smooth'
        })}
        class:selected={index === 0}
      ></li>
    {/each}
  </ul>
  
  <style>
    /* Tailwind and custom styles here */
  </style>
  