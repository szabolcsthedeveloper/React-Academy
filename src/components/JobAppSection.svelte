<script>
  export let sectionName;
</script>

<section class="flex flex-col gap-4" id={sectionName}>
  <div id="topOfPage" class="flex justify-between items-center">
    <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold">
      {sectionName}
    </h3>
    {#if sectionName === "LEARNING"}
      <i class="fa fa-book text-xl sm:text-3xl" />
    {:else if sectionName === "GITHUB"}
      <i class="fa-brands fa-github text-xl sm:text-3xl" />
    {:else if sectionName === "LINKEDIN"}
      <i class="fa-brands fa-linkedin-in text-xl sm:text-3xl" />
    {:else if sectionName === "PORTFOLIO"}
      <i class="fa-regular fa-user text-xl sm:text-3xl" />
    {:else if sectionName === "PROJECTS"}
      <i class="fa-solid fa-database text-xl sm:text-3xl" />
    {:else if sectionName === "JOB HUNT"}
      <i class="fa-solid fa-list-check text-xl sm:text-3xl" />
    {:else if sectionName === "INTERVIEW"}
      <i class="fa-regular fa-pen-to-square text-xl sm:text-3xl" />
    {:else if sectionName === "NETWORKING"}
      <i class="fa-solid fa-users text-xl sm:text-3xl" />
    {:else if sectionName === "SKILLS"}
      <i class="fa-solid fa-bar-chart text-xl sm:text-3xl" />
    {:else if sectionName === "RESUME"}
      <i class="fa-regular fa-file-lines text-xl sm:text-3xl" />
    {:else if sectionName === "FINAL STEP"}
      <i class="fa-solid fa-award text-xl sm:text-3xl" />
    {/if}
  </div>
  <div class="flex flex-col gap-3">
    <slot />
  </div>
</section>
