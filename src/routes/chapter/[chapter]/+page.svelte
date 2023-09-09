<script>
    import store from "../../../store";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    const roadmapItem = $page.params.chapter;

    let styles;

    $: {
        let darkTheme = $store.darkTheme;
        styles = {
            borderColor: darkTheme
                ? " border-slate-300 hover:border-blue-300"
                : " border-slate-600 hover:border-blue-300",
        };
    }

    onMount(() => {
        const blurDivs = document.querySelectorAll(".blur-load");
        blurDivs.forEach((div) => {
            const img = div.querySelector("img");

            function loaded(img) {
                img.style.opacity = 1;
            }

            if (img.complete) {
                loaded(img);
            } else {
                img.addEventListener("load", () => loaded(img));
            }
        });
    });
</script>

<main
    class="flex-1 p-4 max-w-[800px] mx-auto w-full flex flex-col gap-8 min-h-[400px] sm:min-h-[500px]"
>
    <div
        class="py-4 sm:p-6 md:py-10 flex items-center justify-center flex-col gap-2"
    >
        <p>Current Objective</p>
        <h4
            class="text-blue-400 font-semibold text-2xl sm:text-3xl md:text-4xl"
        >
            {roadmapItem}
        </h4>
    </div>
    {#each Object.keys($store.roadmap[roadmapItem].milestones) as milestone, mileStoneIndex}
        <a
            href={$store.roadmap[roadmapItem].milestones[milestone].url}
            target="_blank"
            class={"relative group flex flex-col group cursor-pointer border-[1.5px] duration-200 border-solid " +
                styles.borderColor}
        >
            <!-- <div class="bg-blue-600 blur-lg absolute inset-4 z-0" /> -->

            <div
                class="aspect-video overflow-hidden z-20 relative blur-load"
                style="background-image: url(../assets/{$store.roadmap[
                    roadmapItem
                ].milestones[milestone].imgUrlSm})"
            >
                {#if $store.roadmap[roadmapItem].milestones[milestone].complete}
                    <div class="absolute inset-0 grid place-items-center">
                        <div class="absolute inset-0 bg-slate-950 opacity-80" />
                        <h3
                            class="font-semibold text-center text-2xl sm:text-3xl uppercase z-20 md:text-4xl text-green-400"
                        >
                            Complete 🔥
                        </h3>
                    </div>
                {/if}
                <img
                    src={$store.roadmap[roadmapItem].milestones[milestone]
                        .imgUrl}
                    alt="video thumbnail"
                    class="w-full h-full object-cover duration-200 img opacity-0"
                />
            </div>
            <div
                class="flex flex-col gap-2 p-2 sm:p-3 md:p-4 z-20 bg-slate-900 text-white"
            >
                <div class="flex items-start justify-between gap-4">
                    <h4 class="text-base sm:text-lg md:text-xl">
                        {milestone}
                    </h4>
                    <div
                        class={"rounded-full text-slate-700 px-2 py-0.5 text-xs sm:text-sm " +
                            ($store.roadmap[roadmapItem].milestones[milestone]
                                .primary
                                ? " bg-green-300"
                                : " bg-blue-300")}
                    >
                        <h4>
                            {$store.roadmap[roadmapItem].milestones[milestone]
                                .primary
                                ? " Recommended"
                                : " Optional"}
                        </h4>
                    </div>
                </div>
                <h3 class="text-xs sm:text-sm">
                    {$store.roadmap[roadmapItem].milestones[milestone]
                        .description}
                </h3>
                <h4>Start now <span class="text-blue-400">&rarr;</span></h4>
            </div>
        </a>

        <!-- <div class="relative group flex flex-col">
            <div
                class="absolute bottom-0 w-full bg-gradient-to-t from-slate-900 p-2 sm:p-3 md:p-4 to-transparent group-hover:to-slate-900 duration-200 group-hover:pt-4 pt-4 sm:pt-6 md:pt-8 text-white z-30 flex gap-2 flex-col"
            >
                <div class="flex items-center justify-between gap-4">
                    <p class="md:text-lg truncate">{milestone}</p>
                </div>
                <h3>
                    {$store.roadmap[roadmapItem].milestones[milestone]
                        .description}
                </h3>
            </div>
            <div class="bg-blue-400 blur-lg absolute inset-4 z-0" />
            <div class="aspect-video overflow-hidden z-20 relative">
                <img
                    src={$store.roadmap[roadmapItem].milestones[milestone]
                        .imgUrl}
                    alt="video thumbnail"
                    class="w-full h-full object-cover"
                />
            </div>
        </div> -->
    {/each}

    <a href="/" class="my-10 flex items-center gap-2 mx-auto">
        <h4>Back <span class="text-blue-400">home</span></h4>
        <i class="fa-solid fa-house" />
    </a>
</main>
