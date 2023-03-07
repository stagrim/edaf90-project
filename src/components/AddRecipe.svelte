<script lang="ts">
    import Dialog, { Title, Content, Actions } from "@smui/dialog";
    import LayoutGrid from "@smui/layout-grid/src/LayoutGrid.svelte";
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";
    import Cell from "@smui/layout-grid/src/Cell.svelte";
    import FilePicker from "./FilePicker.svelte";
    import SegmentedButton, { Segment } from "@smui/segmented-button";
    import { Label } from "@smui/common";
    import Button from "@smui/button";

    export let open = true;

    let form: HTMLFormElement;
    let difficulties = [
        [1, "Easy"],
        [2, "medium"],
        [3, "hard"],
    ];

    let title = "",
        description = "",
        ingredients = "",
        steps = "",
        minutes: string = "",
        difficulty: [number, string] = difficulties[0],
        getImage;

    const submitForm = async (e: SubmitEvent) => {
        e.preventDefault();

        const image = getImage();
        if (!image) {
            return;
        }

        if (!difficulty) {
            return;
        }

        fetch("/api/recipe", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                description,
                ingredients,
                steps,
                minutes,
                difficulty: difficulty[0],
                image,
            }),
        });
    };
</script>

<Dialog
    bind:open
    aria-labelledby="large-scroll-title"
    aria-describedby="large-scroll-content"
    surface$style="width: 1300px; max-width: calc(100vw - 32px);"
>
    <LayoutGrid style="width: 95%; padding-top: 60px">
        <Cell span={12}>
            <h3>Add recipe</h3>
        </Cell>
        <Cell span={6} class="add-form">
            <Textfield
                variant="outlined"
                bind:value={title}
                label="Title"
                required
            >
                <HelperText slot="helper" />
            </Textfield>

            <Textfield
                textarea
                bind:value={description}
                style="width: 100%; height: 100px"
                label="Description"
                required
            >
                <HelperText slot="helper" />
            </Textfield>

            <Textfield
                textarea
                bind:value={ingredients}
                style="width: 100%; height: 200px"
                helperLine$style="width: 100%;"
                label="Ingredients"
                required
            >
                <HelperText slot="helper"
                    >Type each ingredient on a different line</HelperText
                >
            </Textfield>

            <Textfield
                textarea
                bind:value={steps}
                style="width: 100%; height: 200px;"
                helperLine$style="width: 100%;"
                label="Steps"
                required
            >
                <HelperText slot="helper"
                    >Type each step on a different line</HelperText
                >
            </Textfield>
        </Cell>
        <Cell span={6}>
            <h5>Select difficulty</h5>

            <Textfield
                bind:value={minutes}
                label="Minutes to complete"
                type="number"
                required
            />

            <h5>Select difficulty</h5>
            <SegmentedButton
                segments={difficulties}
                let:segment
                bind:selected={difficulty}
                singleSelect
                required
            >
                <!-- Note: the `segment` property is required! -->
                <Segment {segment}>
                    <Label>{segment[1]}</Label>
                </Segment>
            </SegmentedButton>

            <h5>Select image</h5>

            <FilePicker bind:getImage />

            <br />
            <br />

            <Button on:click={submitForm} variant="raised">
                <Label>Submit</Label>
            </Button>
        </Cell>
    </LayoutGrid>
</Dialog>

<style>
    :global(.add-form *) {
        margin-bottom: 6px;
    }
</style>
