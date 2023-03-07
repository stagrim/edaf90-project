<script lang="ts">
    import Dialog, { Title, Content, Actions } from "@smui/dialog";
    import LayoutGrid from "@smui/layout-grid/src/LayoutGrid.svelte";
    import Media from "@smui/card/src/Media.svelte";
    import Card from "@smui/card/src/Card.svelte";
    import Cell from "@smui/layout-grid/src/Cell.svelte";
    import IconButton, { Icon } from "@smui/icon-button";
    import { Svg } from "@smui/common";
    import { mdiCloseCircleOutline } from "@mdi/js";
    import type { Recipe } from "src/utils/types";
    export let open = false;
    export let recipe: Recipe;

    /*
            <Cell span={12}>
            <IconButton
                style="float: right"
                size="normal"
                on:click={() => (open = false)}
            >
                <Icon component={Svg} viewBox="0 0 24 24">
                    <path d={mdiCloseCircleOutline} />
                </Icon>
            </IconButton>
        </Cell>
    */
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
            <h1 style="margin: 0%">
                {recipe.title}
            </h1>
            <p>
                {recipe.description}
            </p>
        </Cell>
        <Cell span={4}>
            <h3>Ingredienser</h3>
            {#each recipe.ingredients as ingredient, i}
                <p>
                    {ingredient}
                </p>
            {/each}
        </Cell>
        <Cell span={8}>
            <h3>Tillagning</h3>
            {#each recipe.steps as instruction, i}
                <p>
                    {`${i + 1}. ${instruction}`}
                </p>
            {/each}
        </Cell>
    </LayoutGrid>
</Dialog>
