<script>
  import { onMount } from "svelte";
  import store from "../store";

  let styles;

  $: {
    let darkTheme = $store.darkTheme;
    styles = {
      numberColor: darkTheme ? " text-slate-500" : " text-slate-400",
      borderColor: darkTheme
        ? " after:border-blue-700 before:border-blue-500"
        : " before:border-blue-700 after:border-blue-500",
      iconBorderColor: darkTheme ? " border-blue-700" : " border-blue-700",
      inputColor: darkTheme ? " bg-slate-950" : " bg-white",
      subTextColor: darkTheme ? " text-slate-300" : " text-slate-600",
    };
  }

  let selectedEntry = null;

  function toggleSelectedEntry(index) {
    if (selectedEntry === index) {
      selectedEntry = null;
      return;
    }
    selectedEntry = index;
  }

  function handleCompleteMilestone(milestone, chapter, e) {
    e.stopPropagation();
    $store.roadmap[chapter].milestones[milestone].complete =
      !$store.roadmap[chapter].milestones[milestone].complete;
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

<div
  class="flex flex-col justify-center items-center flex-1 w-[800px] max-w-full mx-auto"
>
  <div class="flex flex-col gap-2 py-10 sm:py-14 md:py-16 -mt-4 sm:-mt-0">
    <h1 class="text-center text-3xl sm:text-4xl md:text-5xl font-medium">
      WELCOME <span class={"poppins capitalize text-blue-700 italic"}
        >{$store.name}</span
      >
    </h1>
    <h4 class="text-left">
      Discover the roadmap I'd take if starting from scratch. Here's a mix of
      free and paid courses. Most Udemy courses, are on sale and are priced at
      $15. Coursera charges $50/mo. In total, budget about $450 for top-tier
      certificates—a steal compared to individual Comptia or Cisco
      certifications.
    </h4>
  </div>
  <div class="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">
    {#each Object.keys($store.roadmap) as roadmapItem, itemIndex}
      <button
        on:click={() => (window.location.href = "/chapter/" + roadmapItem)}
        class={"relative group before:absolute before:top-0 before:left-0  before:border-t-[1.5px] before:border-l-[1.5px]  text-center before:duration-200 after:absolute after:bottom-0 after:right-0  after:border-b-[1.5px] after:border-r-[1.5px]  after:duration-200 flex flex-col  " +
          styles.borderColor +
          " " +
          (selectedEntry === itemIndex
            ? " after:w-full after:h-full before:h-full before:w-full"
            : " after:w-2/3 after:h-2/3 hover:after:w-full hover:after:h-full hover:before:h-full hover:before:w-full before:w-2/3 before:h-2/3")}
      >
        <div class="flex flex-col w-full gap-4 p-3 sm:p-4 z-10">
          <div
            class="flex w-full gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl"
          >
            <h4 class={"font-bold    " + styles.numberColor}>
              0{itemIndex + 1}
            </h4>
            <h4 class=" duration-200 flex-1 text-center">
              {roadmapItem}
            </h4>
            <h4 class={"font-bold opacity-0   " + styles.numberColor}>
              0{itemIndex + 1}
            </h4>
          </div>
          <div class={"text-left" + styles.subTextColor}>
            <p>{$store.roadmap[roadmapItem].description}</p>
          </div>
          <div
            class="flex items-center justify-center py-1 w-full flex-wrap gap-4 sm:gap-6"
          >
            {#each Object.keys($store.roadmap[roadmapItem].milestones) as milestone, mileStoneIndex}
              <button
                on:click={(e) =>
                  handleCompleteMilestone(milestone, roadmapItem, e)}
                class="h-6 sm:h-7 aspect-square rounded-full grid place-items-center relative hover:opacity-60 duration-200"
              >
                {#if $store.roadmap[roadmapItem].milestones[milestone].complete}
                  <div
                    class="absolute inset-0 z-30 rounded-full overflow-hidden grid place-items-center"
                  >
                    <div class="absolute inset-0 bg-slate-950 opacity-80" />
                    <i class="fa-solid fa-check text-green-400 z-40" />
                  </div>
                {/if}
                <div
                  class={"absolute z-10 inset-[-3px] opacity-50 border-[1.5px] border-solid  duration-200 rounded-full " +
                    styles.iconBorderColor}
                />
                <div
                  class="absolute inset-0 z-20 grid place-items-center transparent rounded-full overflow-hidden blur-load"
                  style="background-image: url(assets/{$store.roadmap[
                    roadmapItem
                  ].milestones[milestone].iconUrlSm});"
                >
                  <img
                    src={$store.roadmap[roadmapItem].milestones[milestone]
                      .iconUrl}
                    alt="iconImg"
                    loading="lazy"
                    class="w-full object-cover h-full img opacity-0 duration-200"
                  />
                </div>
              </button>
            {/each}
          </div>
        </div>
        {#if itemIndex === selectedEntry}
          <div class="h-[1px] w-3/4 mx-r ml-3 sm:ml-4 bg-blue-700" />
          <div class="p-3 sm:p-4 grid grid-cols-1 md:grid-cols-2 gap-4" />
        {/if}
      </button>
    {/each}

    <div class="flex flex-col gap-2 py-10 sm:py-14 md:py-16 -mt-4 sm:-mt-0">
      <h1
        class="text-center text-3xl sm:text-4xl md:text-5xl font-medium mt-14"
      >
        BECOME <span class={"poppins capitalize text-blue-700 italic"}
          >IRRESITABLE</span
        >
      </h1>
      <h4 class="text-left -mb-10">
        No more settling for less. Equip yourself with the skills that make top
        tech firms compete for <span class={"font-semibold "}>YOU!</span>
      </h4>
    </div>

    <a href={"/job_applications"} class="flex p-0.5 mx-auto relative">
      <div
        class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
      >
        <div
          class="bg-gradient-to-r w-[200%] aspect-square from-blue-700 to-cyan-500 specialSpin"
        />
      </div>

      <div
        class={"flex flex-1 rounded text-base relative px-8 md:px-10 md:py-5 py-4 group " +
          styles.inputColor}
      >
        <h4
          class="group-hover:scale-[105%] duration-200 md:text-lg text-center"
        >
          UNLOCK YOUR POTENTIAL
        </h4>
      </div>
    </a>
  </div>
</div>
