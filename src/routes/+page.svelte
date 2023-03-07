<script lang="ts">
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import RecipeCard from "../components/RecipeCard.svelte";
    import type { Recipe } from "src/utils/types";
    import type { PageData } from "./$types";

    export let data: PageData;
    let recipes: Recipe[] = data.recipes;
</script>

<LayoutGrid style="padding: 2%;">
    {#each recipes as recipe}
        <Cell span={3}>
            <RecipeCard {recipe} />
        </Cell>
    {/each}
</LayoutGrid>
