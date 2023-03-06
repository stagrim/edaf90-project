<script lang="ts">
    import TopAppBar, {
        Row,
        Section,
        Title,
        AutoAdjust,
    } from "@smui/top-app-bar";

    let topAppBar: TopAppBar;
</script>

<TopAppBar class="top" bind:this={topAppBar} variant="standard">
    <Row>
        <Section>
            <Title>Recipes</Title>
        </Section>
        <Section align="end" toolbar />
    </Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
    <slot />
</AutoAdjust>

<style>
    /* Hide everything above this component. */
    :global(#smui-app),
    :global(body) {
        margin: 0;
        padding: 0;
    }
    :global(html) {
        display: block !important;
        height: auto !important;
        width: auto !important;
        position: static !important;
    }
</style>
