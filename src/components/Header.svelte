<script>
  import store from "../store";

  function toggleTheme() {
    $store.darkTheme = !$store.darkTheme;
  }

  let styles;

  $: {
    let darkTheme = $store.darkTheme;
    styles = {
      accentColor: darkTheme ? " text-blue-400" : " text-blue-500",
      fadedColor: darkTheme ? " text-slate-300 " : " text-slate-500",
      specialShadow: darkTheme ? " specialLightShadow" : " specialDarkShadow",
      toggleColor: darkTheme
        ? " border-transparent hover:border-slate-600 "
        : " border-transparent hover:border-slate-300",
      menuColor: darkTheme
        ? " bg-slate-900 border-slate-950"
        : " bg-white border-blue-50 ",
      progressBarColor: darkTheme ? " bg-slate-600" : " bg-slate-300",
      iconColor: darkTheme ? " text-blue-400" : " text-amber-400",
    };
  }

  let count;

  $: {
    let tempCount = 0;
    for (let chapter in $store.roadmap) {
      for (let milestone in $store.roadmap[chapter].milestones) {
        if ($store.roadmap[chapter].milestones[milestone].complete) {
          tempCount++;
        }
      }
    }
    count = tempCount;
  }
</script>

<header class=" flex items-center justify-between gap-4 p-4 sm:p-5 md:p-6">
  <a href="/" class="flex flex-col text-center">
    <div class="flex items-center gap-2">
      {#if $store.darkTheme}
        <img
          class="ml-2 w-4 sm:w-8 md:w-10 aspect-square rounded-md duration-200 hover:opacity-60"
          src="/logo-white.png"
          alt="logo-dark_img"
        />
      {:else}
        <img
          class="ml-2 w-4 sm:w-8 md:w-10 aspect-square rounded-md duration-200 hover:opacity-60"
          src="/logo-dark.png"
          alt="logo-white_img"
        />
      {/if}
    </div>
  </a>
  <div class="flex items-center gap-4 text-base sm:text-lg md:text-xl">
    <button
      on:click={toggleTheme}
      class={"grid place-items-center w-8 sm:w-10 aspect-square rounded-md duration-200 hover:opacity-60"}
    >
      {#if $store.darkTheme}
        <i class={"fa fa-adjust "} />
      {:else}
        <i class={"fa fa-adjust  "} />
      {/if}
    </button>
    <div
      class={"grid place-items-center w-8 sm:w-10  aspect-square rounded-md duration-200 relative group "}
    >
      <i
        class="fa-regular fa-user duration-200 group-hover:opacity-60 cursor-pointer"
      />
      <div
        class="flex-col absolute top-full right-0 pt-1 hidden group-hover:flex"
      >
        <div
          class={"flex flex-col w-48 sm:w-56 gap-3 p-2 rounded-md shadow border border-solid " +
            styles.menuColor}
        >
          <div class="flex items-center justify-between gap-2">
            <i class="fa-regular fa-user" />
            <h4 class="text-sm truncate">
              {$store.name || "New user"}
            </h4>
          </div>
          <div class="flex flex-col gap-0.5">
            {#if count < 24}
              <div
                class={"flex items-center justify-between text-xs sm:text-sm italic " +
                  styles.fadedColor}
              >
                <h4>Progress</h4>
                <h4>{count} / 24</h4>
              </div>
              <div class={" relative h-1 " + styles.progressBarColor}>
                <div
                  class="h-full absolute top-0 left-0 bg-blue-600"
                  style={`width: ${(count * 100) / 24}%;`}
                />
              </div>
            {:else}
              <h3
                class="font-semibold text-center uppercase z-20 text-green-400"
              >
                COMPLETED 🔥
              </h3>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
