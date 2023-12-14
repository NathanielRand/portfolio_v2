<script>
    const colors = [];

    // Generate 5 random colors
    for (let i = 0; i < 5; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    colors.push(randomColor);
    }

    // Use the random colors in box-shadow
    const randomBoxShadow = `0 10px 50px ${colors[Math.floor(Math.random() * colors.length)]}`;

    console.log(randomBoxShadow); // Output: "0 10px 50px rgb(123, 45, 178)"
</script>

<div class="external bg-primary-200">
    <div class="horizontal-scroll-wrapper">
        <div class="img-wrapper slower">
            <a href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/" target="_blank" rel="noopener"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-cafe-terrace.jpg" alt="">
            </a>
        </div>
    
        <div class="img-wrapper faster">
            <a href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/antiquedollboy.jpg" alt="">
            </a>
        </div>
    
        <div class="img-wrapper slower vertical">
            <a href="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/windowshopclock.jpg" alt="">
            </a>
        </div>
    
        <div class="img-wrapper slower slower-down">
            <a href="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/swanduckriver.jpg" alt="">
            </a>
        </div>
    
        <div class="img-wrapper">
            <a href="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-terrace.jpg" alt="">
            </a>
        </div>
    
        <div class="img-wrapper slower">
            <a href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/paris-seine-boat.jpg" alt="">
            </a>
        </div>
    
        <div class="img-wrapper faster1">
            <a href="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/old-man-river.jpg" alt="">
            </a>
        </div>
        
        <div class="img-wrapper slower slower2">
            <a href="https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/cafe-table-street.jpg" alt="">
            </a>
        </div>
        
        <div class="img-wrapper">
            <a href="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/street-scene-people.jpg" alt="">
            </a>
        </div>
        
        <div class="img-wrapper slower">
            <a href="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/notre-dame-river-boat.jpg" alt="">
            </a>
        </div>
        
        <div class="img-wrapper slower last">
            <a href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/" target="_blank" rel="noopener">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/shop-window-reflection.jpg" alt="">
            </a>
        </div>
    </div>
    <p class="scroll-info"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" ><path d="M50,67.1c-0.6,0-1.2-0.2-1.8-0.7c-3.8-3.8-7.7-7.7-11.5-11.5c-2.3-2.3,1.2-5.8,3.5-3.5c2.5,2.5,4.9,4.9,7.4,7.4      c0-13.7,0-27.4,0-41.2c0-0.6,0.2-1.2,0.5-1.5c0,0,0,0,0,0c0.4-0.6,1.1-1,2-0.9c13.7,0.3,26.4,7.2,33.5,19.1      C96.5,55.9,84.7,85,60.2,91.6C35.5,98.2,11.6,79.1,11.1,54c-0.1-3.2,4.9-3.2,5,0c0.3,13.8,8.4,26.4,21.3,31.5      c12.5,5,27.1,1.9,36.6-7.5c9.5-9.5,12.5-24.1,7.5-36.6c-4.8-12.1-16.3-20.1-29-21.2c0,12.8,0,25.5,0,38.3      c2.5-2.5,4.9-4.9,7.4-7.4c2.3-2.3,5.8,1.3,3.5,3.5c-3.9,3.9-7.8,7.8-11.8,11.8C51.2,66.9,50.6,67.1,50,67.1z"/></svg></span> Try scrolling down</p>
    <header>
        <p>Postcards from Paris.</p>
        <h1>Css-only parallax horizontal gallery</h1>
        <p>Grab (these and more) photos from - <a href="https://altphotos.com/free/paris/" target="_blank" rel="noopener">altphotos.</a></p>
    </header>
</div>
  
<style>

    /* body {	
        background: linear-gradient(to right, #111827, #3b445c );
        background-size: 100%;
        background-repeat: no-repeat;
    }

    body:before{
        content:'';
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        z-index: -1;
        background: linear-gradient(to right bottom, rgba(255,255,255,0.2), #21D4FD 75%);
    } */

    * {
        box-sizing: border-box;
    }

    /* hide scrollbar */
    ::-webkit-scrollbar {
        width: 1px;
        height: 1px;
    }

    ::-webkit-scrollbar-button {
        width: 1px;
        height: 1px;
    }
    .external {
        overflow: hidden;
        height: 100vh;
    }

    .horizontal-scroll-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vh;
        transform: rotate(-90deg) translate3d(0,-100vh,0);
        transform-origin: right top;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 0;
        height: 100vw;
        perspective: 1px;
        transform-style: preserve-3d;
        padding-bottom: 10rem;
    }
    .img-wrapper {
        transform: rotate(90deg);
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 40vh;
        transform-origin: 50% 50%;
        transform: rotate(90deg) translateZ(.1px) scale(0.9) translateX(0px) translateY(-3vh);
        transition: 1s;
    }

    .img-wrapper:hover {
        min-height: 65vh;
    }

    .slower {
        transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(-10vh);
    }
    .slower1 {
        transform: rotate(90deg) translateZ(-.25px) scale(1.05) translateX(0%) translateY(8vh);
    }
    .slower2 {
        transform: rotate(90deg) translateZ(-.3px) scale(1.3) translateX(0%) translateY(2vh);
    }
    .slower-down {
        transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(16vh) ;
    }
    .faster {
        transform: rotate(90deg) translateZ(.15px) scale(0.8) translateX(0%) translateY(14vh) ;
    }
    .faster1 {
        transform: rotate(90deg) translateZ(.05px) scale(0.8) translateX(0%) translateY(10vh) ;
    }
    .fastest {
        transform: rotate(90deg) translateZ(.22px) scale(0.7) translateX(-10vh) translateY(-15vh) ;
    }
    .vertical {
        transform: rotate(90deg) translateZ(-.15px) scale(1.15) translateX(0%) translateY(0%) ;
    }
    .last {
        transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(25vh) translateY(-8vh) ;
    }
    .scroll-info, header {
        position: absolute;
        left: 1rem;
    }


    header {
        bottom: 1rem;
    }

    a {
        color: inherit;
        font-weight: 500;
    }

    h1 {
        font-weight: 300;
        font-size: 1rem;
    }

    .img-wrapper a {
        overflow: hidden;
        display: block;
        padding: 1vh ;
        background: #efecdb;
        box-shadow: 0 10px 50px #c5a90882;
    }

    img {
        max-width: 45vh;
        max-height: 50vh;
        transition: .5s;
        vertical-align: top;
        filter: saturate(40%) sepia(30%) hue-rotate(5deg);
    }

    a:hover img {
        filter: none;
    }

    p {
        margin: 0;
    }

    .scroll-info {
        display: flex;
        align-items: center;
        top: 1rem;
    }

    .icon svg {
        width: 50px;
        fill: currentcolor;
    }
</style>
  