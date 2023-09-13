<script>
  import store from "../store";
  import Roadmap from "./Roadmap.svelte";
  let name = "";

  let styles;

  $: {
    let darkTheme = $store.darkTheme;

    styles = {
      backgroundColor: darkTheme ? "bg-black" : "bg-white",
      inputColor: darkTheme ? " bg-slate-950" : " bg-white",
      accentColor: darkTheme ? " text-blue-700" : " text-blue-800",
      fadedColor: darkTheme ? " text-slate-200 " : " text-slate-500",
      blueText: darkTheme ? " text-blue-700" : " text-blue-500",
      amberText: darkTheme ? " text-amber-400" : " text-amber-500",
    };
  }

  function handleSaveName() {
    if (!name) {
      return;
    }
    $store.name = name;
  }

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSaveName();
    }
  };
</script>

<main
  class="flex-1 p-4 max-w-[1000px] mx-auto w-full flex flex-col min-h-[400px] sm:min-h-[500px]"
>
  {#if !$store.name}
    <div
      class="flex flex-col justify-center items-center flex-1 gap-6 max-w-[600px] w-full mx-auto pb-10 pt-20"
    >
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
        WELCOME TO THE COMPLETE REMOTE
        <span class={" " + styles.accentColor}>REACT </span>JOB
        <span class={" " + styles.accentColor}> ROADMAP</span>
      </h1>

      <h4 class=" text-center">
        <span class=" font-semibold">LEVEL UP</span> YOUR PROGRAMMING SKILLS
        FROM
        <span class={"font-semibold " + styles.blueText}>ZERO</span>
        TO
        <span class={"font-semibold " + styles.amberText}>HERO</span>!
      </h4>

      <div class="flex gap-1 text-xs sm:text-sm">
        <h4>4.5</h4>
        <div class="flex items-center gap-0.5 text-xs">
          {#each [1, 2, 3, 4, 5] as ratingNum}
            <div class="grid place-items-center relative">
              {#if ratingNum == 5}
                <div
                  class="flex justify-end w-[45%] absolute top-1/2 -translate-y-1/2 right-0 overflow-hidden"
                >
                  <i class="fa-solid fa-star text-white" />
                </div>
              {/if}
              <i class="fa-solid fa-star text-amber-400" />
            </div>
          {/each}
        </div>
        <h4>(100+)</h4>
      </div>
      <div class="flex p-0.5 w-full relative">
        <div
          class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
        >
          <div
            class="bg-gradient-to-r w-[200%] aspect-square from-blue-700 to-blue-600 specialSpin"
          />
        </div>

        <div class={"flex flex-1 rounded  relative " + styles.inputColor}>
          <input
            on:keypress={onKeyPress}
            bind:value={name}
            class="rounded-md flex-1 outline-none hover:outline-none bg-transparent p-3"
            placeholder="Enter your name to access"
          />
          <button
            on:click={handleSaveName}
            class={" py-2 rounded-md  hover:opacity-60 px-3 duration-200   " +
              styles.buttonBackground +
              " " +
              (name ? " text-blue-600 scale-[105%] sm:scale-110" : " ")}
          >
            <i class="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  {:else}
    <Roadmap />
  {/if}
</main>
