<script lang="ts">
    import type { Recipe } from "../../../backend/server";
    import type { PageData } from "./$types";

    export let data: PageData;
    let recipes: Recipe[] = data.item
</script>

<h1>All recipes</h1>

{#each recipes as recipe}
    <a href={`/recipe/${recipe.id}`}>
        <p>
            {recipe.title}
            <img width="300px" src={recipe.img} alt="">
        </p>
    </a>
{/each}
