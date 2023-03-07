<script lang="ts">
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import { mdiPlus } from '@mdi/js';
    import Fab, { Icon } from '@smui/fab';
    import { Svg } from '@smui/common';
    import RecipeCard from "../components/RecipeCard.svelte";
    import type { Recipe } from "src/utils/types";
    import type { PageData } from "./$types";
    import AddRecipe from "../components/AddRecipe.svelte";

    export let data: PageData;
    let recipes: Recipe[] = data.recipes;
    let add_open = false
</script>

<AddRecipe bind:open={add_open} />

<LayoutGrid style="padding: 2%;">
    {#each recipes as recipe }
        <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 12 }}>
            <RecipeCard {recipe} />
        </Cell>
    {/each}
</LayoutGrid>

<Fab class="fab" on:click={() => add_open = true} color="primary">
    <Icon component={Svg} viewBox="2 2 20 20">
    <path fill="currentColor" d={mdiPlus} />
    </Icon>
</Fab>

<style>
    :global(.fab) {
        position: fixed !important;
        bottom: 20px;
        right: 20px;
    }
    * :global(svg:focus) {
        outline: 0;
    }
</style>
