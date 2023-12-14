<script>
    let scroll = 0;
</script>
  
<svelte:window bind:scrollY={scroll} />
  
<h1 style="color: white;">Scroll Position: {scroll}</h1>
<p style="color: white;">Visit <a href="https://kit.svelte.dev" style="color: gold;">kit.svelte.dev</a> to read the documentation</p>
  
<section style="height: 200vh; background-color: #222; display: flex; flex-wrap: wrap; align-items: center; justify-content: center;">
    {#each new Array(8) as _, i}
        <div class="box" style="
        --size: {Math.max(150, 300 - i * 20)}px;
        width: var(--size);
        height: var(--size);
        background: hsl({(i * 40 + scroll / 3) % 360}, 70%, 50%);
        transform: translateY({(i % 2 === 0 ? scroll * 0.8 : -scroll * 0.8) * (i + 1)}px);
        border-radius: {i % 2 === 0 ? '50%' : '0%'};
        opacity: {(i + 1) * 0.1};
        "></div>
    {/each}
</section>
  
<style>
    h1 {
        position: fixed;
        z-index: 10;
        top: 20px;
        left: 20px;
        font-size: 24px;
    }
    p {
        position: fixed;
        z-index: 10;
        bottom: 20px;
        right: 20px;
        font-size: 18px;
    }
    .box {
        margin: 10px;
        transition: transform 0.3s ease-in-out;
    }
</style>
  