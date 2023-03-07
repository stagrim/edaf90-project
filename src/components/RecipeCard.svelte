<script lang="ts">
    import Card, {
        Content,
        PrimaryAction,
        Media,
        MediaContent,
    } from "@smui/card";
    import type { Recipe } from "src/utils/types";
    import RecipeDialog from "./RecipeDialog.svelte";
    export let recipe: Recipe;
    let open = false;
    let clicked = 0;
</script>

<RecipeDialog {recipe} bind:open />

<div class="card-display">
    <div class="card-container">
        <Card>
            <PrimaryAction on:click={() => (open = true)}>
                <Media
                    style="background-image: url({recipe.img})"
                    aspectRatio="16x9"
                />
            </PrimaryAction>
            <div style="padding: 1rem;">
                <h2 class="mdc-typography--headline6" style="margin: 0;">
                    {recipe.title}
                </h2>
            </div>
        </Card>
    </div>
</div>
