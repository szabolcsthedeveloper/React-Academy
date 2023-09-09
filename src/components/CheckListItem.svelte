<script>
    export let item;
    export let handleChecklistUpdate;
    export let checklist;
    export let type;
</script>

<button
    class="flex items-center gap-4 select-none"
    on:click={() => handleChecklistUpdate(item, type)}
>
    <div
        class="h-4 cursor-pointer hover:border-blue-700 aspect-square border border-solid border-[#003C5B] rounded relative"
    >
        {#if checklist.includes(item)}
            <i
                class="fa-solid fa-check absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs"
            />
        {/if}
    </div>
    <h4 class="text-left">{item}</h4>
</button>
