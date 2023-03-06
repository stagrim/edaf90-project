<script lang="ts">
    import RecipeCard from "../components/RecipeCard.svelte";
    import type { Recipe } from "src/utils/types";
    import type { PageData } from "./$types";

    export let data: PageData;
    let recipes: Recipe[] = data.recipes;
</script>

<h1>All recipes</h1>
<RecipeCard />
