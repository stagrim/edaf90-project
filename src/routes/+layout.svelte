<script lang="ts">
    import { onMount } from "svelte";
    import TopAppBar, {
        Row,
        Section,
        Title,
        AutoAdjust,
    } from "@smui/top-app-bar";
    import { mdiWeatherSunny, mdiWeatherNight } from "@mdi/js";
    import { Icon, Svg } from "@smui/common";
    import IconButton from "@smui/icon-button";
    let topAppBar: TopAppBar;

    let darkTheme: boolean | undefined = undefined;

    onMount(() => {
        darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    });
</script>

<svelte:head>
    <!-- SMUI Styles -->
    {#if darkTheme === undefined}
        <link
            rel="stylesheet"
            href="/smui.css"
            media="(prefers-color-scheme: light)"
        />
        <link
            rel="stylesheet"
            href="/smui-dark.css"
            media="screen and (prefers-color-scheme: dark)"
        />
    {:else if darkTheme}
        <link
            rel="stylesheet"
            href="/smui.css"
            media="(prefers-color-scheme: light)"
        />
        <link rel="stylesheet" href="/smui-dark.css" media="screen" />
    {:else}
        <link rel="stylesheet" href="/smui.css" />
    {/if}
</svelte:head>

<TopAppBar class="top" bind:this={topAppBar} variant="standard">
    <Row>
        <Section>
            <Title>Recipes</Title>
        </Section>
        <Section align="end" toolbar>
            <IconButton on:click={() => (darkTheme = !darkTheme)}>
                <Icon component={Svg} viewBox="0 0 24 24" fill="currentColor" d>
                    <path
                        fill="currentColor"
                        d={darkTheme ? mdiWeatherSunny : mdiWeatherNight}
                    />
                </Icon>
            </IconButton>
        </Section>
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
