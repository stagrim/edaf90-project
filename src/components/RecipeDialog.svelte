<script lang="ts">
    import Dialog from "@smui/dialog";
    import LayoutGrid from "@smui/layout-grid/src/LayoutGrid.svelte";
    import Media from "@smui/card/src/Media.svelte";
    import Card from "@smui/card/src/Card.svelte";
    import Cell from "@smui/layout-grid/src/Cell.svelte";
    import type { Recipe } from "../utils/types";
    import StepCheckbox from "./StepCheckbox.svelte";

    export let open = false;
    export let recipe: Recipe;
</script>

<Dialog
    bind:open
    aria-labelledby="large-scroll-title"
    aria-describedby="large-scroll-content"
    surface$style="width: 1300px; max-width: calc(100vw - 32px);"
>
    <LayoutGrid style="width: 95%; padding-top: 60px">
        <Cell span={6}>
            <Card>
                <Media
                    style="background-image: url({recipe.img})"
                    aspectRatio="16x9"
                />
            </Card>
        </Cell>
        <Cell span={6}>
            <h3 style="margin: 0">
                {recipe.title}
            </h3>
            <p>
                {recipe.description}
            </p>
        </Cell>
        <Cell span={4}>
            <h5>Ingredienser</h5>
            {#each recipe.ingredients as ingredient, i}
                <p>
                    {ingredient}
                </p>
            {/each}
        </Cell>
        <Cell span={8}>
            <h5>Tillagning</h5>
            {#each recipe.steps as instruction, i}
                <StepCheckbox text={`${i + 1}. ${instruction}`} />
            {/each}
        </Cell>
    </LayoutGrid>
</Dialog>
