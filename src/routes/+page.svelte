<script lang="ts">
    import LayoutGrid, { Cell } from "@smui/layout-grid";
    import RecipeCard from "../components/RecipeCard.svelte";
    import type { Recipe } from "src/utils/types";
    import type { PageData } from "./$types";

    export let data: PageData;
    let recipes: Recipe[] = data.recipes;
</script>

<h1 style="padding-left: 50px">Alla recept</h1>

<LayoutGrid style="padding: 0 50px;">
    {#each recipes as recipe}
        <Cell span={3}>
            <RecipeCard title={recipe.title} img={recipe.img} />
        </Cell>
    {/each}
</LayoutGrid>
