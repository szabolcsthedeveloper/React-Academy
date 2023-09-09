<script>
    export let sectionName;
</script>

<section class="flex flex-col gap-4" id={sectionName}>
    <div id="topOfPage" class="flex justify-between items-center">
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold">{sectionName}</h3>
        {#if sectionName === "Preparation"}
            <i class="fa-regular fa-pen-to-square text-xl sm:text-3xl" />
        {:else if sectionName === "GitHub"}
            <i class="fa-brands fa-github text-xl sm:text-3xl" />
        {:else if sectionName === "LinkedIn"}
            <i class="fa-brands fa-linkedin-in text-xl sm:text-3xl" />
        {:else if sectionName === "Portfolio"}
            <i class="fa-regular fa-user text-xl sm:text-3xl" />
        {:else if sectionName === "Projects"}
            <i class="fa-solid fa-diagram-project text-xl sm:text-3xl" />
        {:else if sectionName === "Job Hunting"}
            <i class="fa-solid fa-list-check text-xl sm:text-3xl" />
        {:else if sectionName === "Applying"}
            <i class="fa-regular fa-note-sticky text-xl sm:text-3xl" />
        {:else if sectionName === "Networking"}
            <i class="fa-solid fa-network-wired text-xl sm:text-3xl" />
        {:else if sectionName === "Skills"}
            <i class="fa-solid fa-scale-balanced text-xl sm:text-3xl" />
        {:else if sectionName === "FAQ"}
            <i class="fa-regular fa-circle-question text-xl sm:text-3xl" />
        {:else if sectionName === "Resume / Cover Letter"}
            <i class="fa-regular fa-file-lines text-xl sm:text-3xl" />
        {:else if sectionName === "The Last Step"}
            <i class="fa-solid fa-trophy text-xl sm:text-3xl" />
        {/if}
    </div>
    <div class="flex flex-col gap-3">
        <slot />
    </div>
</section>
