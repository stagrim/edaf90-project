<script lang="ts">
    import type { Recipe } from "../../../backend/server";
    import type { PageData } from "./$types";

    export let data: PageData;
    let recipe: Recipe = data.item
</script>

<h1>Individual recipe</h1>

<p>{recipe.title}</p>
