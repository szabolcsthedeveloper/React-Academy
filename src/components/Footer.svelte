<script>
  import { onMount } from "svelte";
  import store from "../store";
  let rating = null;
  let chosenRating = null;

  let styles;

  onMount(() => {
    if (localStorage.getItem("roadmapRating")) {
      chosenRating = parseInt(localStorage.getItem("roadmapRating"));
    }
  });

  $: {
    let darkTheme = $store.darkTheme;
    styles = {
      inputColor: darkTheme
        ? " bg-transparent border-blue-600 focus-within:border-blue-800 hover:border-blue-800"
        : " bg-transparent border-blue-700 focus-within:border-blue-900 hover:border-blue-900",
      starColor: (ratingNum) =>
        ratingNum > (chosenRating || rating)
          ? darkTheme
            ? " text-white"
            : " text-slate-600"
          : " text-amber-300",
    };
  }

  async function handleRating() {
    if (!rating || chosenRating) {
      return;
    }

    console.log(rating);
    chosenRating = rating;

    try {
      const res = await fetch(
        "https://mailing-list-3hzb.onrender.com/api/rate",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            password: "80085",
            rating: rating,
            platform: "roadmap",
          }),
        },
      );
      localStorage.setItem("roadmapRating", chosenRating);
      if (res.status === "201") {
        console.log("Sent");
      }
    } catch (err) {
      console.log("Failed to leave review");
    }
  }
</script>

<footer
  class="py-10 sm:py-14 md:py-20 flex flex-col gap-8 sm:gap-10 md:gap-14 items-center justify-center p-4 text-sm"
>
  {#if $store.name}
    <div class="flex flex-col gap-4">
      <h4 class="text-center">ENJOYING THE GUIDE? LEAVE A RATING!</h4>
      <div class="flex items-center justify-center">
        {#each [1, 2, 3, 4, 5] as ratingNum}
          <button
            on:click={handleRating}
            on:mouseenter={() => (rating = ratingNum)}
            on:mouseleave={() => (rating = null)}
            class={"grid place-items-center text-3xl px-2 " +
              styles.starColor(ratingNum)}
          >
            <i class="fa-solid fa-star" />
          </button>
        {/each}
      </div>
    </div>
  {/if}

  <div class="flex flex-col gap-4">
    <h4 class="text-center">LINKS TO A GOOD TIME</h4>
    <div class="flex gap-4 items-center flex-wrap justify-center text-3xl">
      <a
        href={"https://github.com/szabolcsthedeveloper"}
        target="_blank"
        class="hover:text-blue-600 duration-200"
      >
        <i class="fa-brands fa-github" />
      </a>
      <a
        class="hover:text-blue-600 duration-200"
        href={"https://www.linkedin.com/in/szabolcsthedeveloper/"}
        target="_blank"
      >
        <i class="fa-brands fa-linkedin" />
      </a>
    </div>
  </div>
  <a
    href="https://www.szabolcsnagy.com"
    class="flex items-center gap-2"
    target="_blank"
  >
    <i class="fa-solid fa-house" />
    <h4>BACK TO <span class="text-blue-600">szabolcsnagy.com</span></h4>
  </a>
</footer>
