<script lang='ts'>
    import YouTube from "$lib/assets/youtube_logo.png";
    import TikTok from '$lib/assets/tiktok_logo.png';
    import Twitter from '$lib/assets/twitter_logo.png';
    import Instagram from '$lib/assets/instagram_logo.png';

    class Social {
        title: string
        href: string
        img: string
        tag: string

        constructor(title: string, href: string, tag: string, img: string) {
            this.title = title;
            this.href = href;
            this.tag = tag;
            this.img = img;
        }
    }

    const Socials = [
        new Social(
            "YouTube official channel",
            "https://youtube.com/@altafhussain_90?si=e0B24CC2EKjLNzxX",
            "@altafhussain_90",
            YouTube
        ),
        new Social(
            "Revelations with Altaf Hussain",
            "https://www.facebook.com/AltafHussainRev",
            "@AltafHussainRev",
            "https://cdn.iconscout.com/icon/free/png-256/free-facebook-2038470-1718513.png"
        ),
        new Social(
            "Tiktok",
            "https://www.tiktok.com/@altafhussain_90",
            "@altafhussain_90",
            TikTok
        ),
        new Social(
            "Twitter official",
            "https://www.twitter.com/altafhussain_90",
            "@altafhussain_90",
            Twitter
        ),
        new Social(
           "Instagram",
           "https://www.instagram.com/altafhussain_90",
           "@altafhussain_90",
           Instagram
        )
    ];
</script>
<style>
    .transCard {
        background-color: rgba(255, 255, 255, 0.5);
    }

    .transCard:hover {
        background-color: rgba(230, 230, 230, 0.5);
    }
</style>

<div class="bg-gradient-to-br from-green-600 py-8">
    <section class="mx-auto flex flex-rows justify-evenly flex-wrap gap-8">
        {#each Socials as social, i}
            <a href={social.href} class="transCard flex flex-col align-center md:block md:my-auto p-6 rounded-lg">
                <img src={social.img} class="w-24 md:size-44" alt={social.href}>
                <p class="font-mono text-center sm:text-md lg:text-lg xl:text-xl mt-1 sm:mt-4">{social.tag}</p>
            </a>
        {/each}
    </section>
</div>