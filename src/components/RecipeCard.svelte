<script lang="ts">
    import Card, {
        Content,
        PrimaryAction,
        Media,
        MediaContent,
    } from "@smui/card";
    export let img: string;
    export let title: string;

    let clicked = 0;
</script>

<div class="card-display">
    <div class="card-container">
        <Card>
            <PrimaryAction on:click={() => clicked++}>
                <Media
                    style="background-image: url({img})"
                    aspectRatio="16x9"
                />
            </PrimaryAction>
            <div style="padding: 1rem;">
                <h2 class="mdc-typography--headline6" style="margin: 0;">
                    {title}
                </h2>
            </div>
        </Card>
    </div>
</div>
