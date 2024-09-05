<script lang='ts'>
    import speech from '$lib/assets/speech.png';
    import Boxes from '$lib/boxes';
    import { onMount } from 'svelte';
    import isCustom from '$lib/isCustom';
    import { slide } from 'svelte/transition';
    import Donate from './Donate.svelte';
    import { base } from '$app/paths';
    import hd1 from '$lib/assets/hd1.png';

    const themeSizes = {
        "sm": 640,
        "md": 768,
        "lg": 1024
    };

    let offset = 4;

    // Don't have time, just copying and pasting 3 times
    function issm() {
        return !ismd() && !islg();
    }

    function ismd() {
        return window.innerWidth > themeSizes['md'] && !islg();
    }

    function islg() {
        return window.innerWidth > themeSizes['lg'];
    }

    function getSize() {
        if (islg()) {
            return 'lg';
        } else if (ismd()) {
            return 'md';
        } else {
            return 'sm';
        }
    }

    function getOffset() {
        return {
            'sm': 2,
            'md': 3,
            'lg': 4
        }[getSize()];
    }

    let heroState = 0;

    let isLoaded = false;
    onMount(() => {
        offset = getOffset();
        window.onresize = () => {
            offset = getOffset();
        }
        isLoaded = true;
        heroState = 0;

        setInterval(() => {
            heroState = (heroState + 1) % 3;
        }, 5000);
    });

    const animSpeed = 500;
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&display=swap');

#hero {
    height: 50dvh;
}

.hero {
    overflow: auto;
    position: relative;
    height: 100%;
    width: 100%;
    backdrop-filter: opacity(100%);
}

.hero:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    filter: blur(.05rem);

    width: 100%;
    height: 100%;
}

#hero1:before {
    background-image: url(/src/lib/assets/hd1.png);

    background-size: contain;
    background-repeat: no-repeat;
    background-position: 95% center;
}

#hero2:before {
    background-image: url(/src/lib/assets/building.png);

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

#hero3:before {
    background-image: url(/src/lib/assets/house.jpg);

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>

<section id="hero" class="bg-gradient-to-br from-secondary-600">
    {#if heroState == 0}
        <div    class="hero hidden md:block" id="hero1"
                in:slide={{ delay: 1000, duration: animSpeed, axis: 'x' }}
                out:slide={{ delay: 0, duration: animSpeed, axis: 'x' }}>
            <div class="md:grid md:grid-rows-3 h-full w-full">
                <h1 class="pl-4 text-white text-4xl md:mt-4 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold italic">Founder and Leader of MQM,</h1>
                <div />
                <h1 class="self-end text-center md:mb-4 md:text-left md:pl-16 xl:pl-24 text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold font-display">Mr. Altaf Hussain</h1>
            </div>
        </div>
        <div    class="hero block md:hidden"
                in:slide={{ delay: 1000, duration: animSpeed, axis: 'x' }}
                out:slide={{ delay: 0, duration: animSpeed, axis: 'x' }}>
            <div class="flex flex-col h-full w-full">
                <h1 class="text-center text-white text-4xl font-bold italic">Founder and Leader of MQM,</h1>
                <h1 class="text-center text-white text-4xl font-bold font-display">Mr. Altaf Hussain</h1>
                <img alt="Altaf Hussain" src={hd1}>
            </div>
        </div>
    {:else if heroState == 1}
        <div    in:slide={{ delay: 1000, duration: animSpeed, axis: 'x' }}
                out:slide={{delay: 0, duration: animSpeed, axis: 'x' }}
                id="hero2" class="hero">
        </div>
    {:else if heroState == 2}
        <div    in:slide={{ delay: 1000, duration: animSpeed, axis: 'x' }}
                out:slide={{delay: 0, duration: animSpeed, axis: 'x' }}
                id="hero3" class="hero">
        </div>
    {/if}
</section>

<hr>
<hr>
<hr>
<hr>


<!--
<section class="bg-gradient-to-tr from-primary-600">
    <div class="max-w-screen-xl mx-auto py-8 md:py-16">
        <div class="flex flex-col place-self-center items-center text-center">
            <h1 class="max-w-2xl mb-5 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-primary-600 dark:text-green-300">
                Thank you for Gifting
            </h1>
            <h1 class="max-w-2xl mb-5 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-primary-600 dark:text-green-300">
                For Your Beloved Quaid
            </h1>
            

           <Donate isCenter={false} id={1} />
        </div>
    </div>
</section>
-->

<hr>
<hr>
<hr>
<hr>


<!--This is for the Boxes-->
<!-- bg-gradient-to-br from-primary-600  -->
<section class="bg-gradient-to-br from-primary-600 flex grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 px-8 lg:px-24">
    {#if isLoaded}
    {#each Boxes as box, i}
        {#if i % offset == 0 && Boxes.length < i + offset}
            <div>
                <!-- This is to center the column -->
            </div>
        {/if}
        <a href={base + box.href} class="h-full w-full flex flex-col align-center">
            <!--
                <div class="relative bigbox max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                
                </div>
            -->
            <img src="{box.bg}" alt={box.name} class="rounded-lg md:rounded-xl 2xl:rounded-3xl mx-auto md:w-[33dvh] md:h-auto">
            <h5 class="md:mb-1 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{box.name}</h5>
            <p class="font-bold text-center font-normal text-gray-700 dark:text-gray-400">{box.description}</p>
        </a>
    {/each}
    {/if}
</section>
