<script lang="ts">
    import Button, { Label, Icon } from '@smui/button';
    import Card from "@smui/card/src/Card.svelte";
    import Media from "@smui/card/src/Media.svelte";

    let filePicker
    let image: string = ""

    export const getImage = () => {
        if (!image) {
            // TODO: form validation
            return null
        }
        return image
    }

    const onFileSelected = (e: ChangeEventHandler<HTMLInputElement>) => {
        image = e.target.files[0];
        let reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onload = e => {
            image = e.target.result
        }
    }

    const selectFile = () => filePicker.click()
</script>

<Card on:click={selectFile} style="cursor: pointer">
    <Media
        style="background-image: url({image});"
        aspectRatio="16x9"
    />
</Card>


<Button color="secondary" variant="raised" style="margin-top: 10px" on:click={selectFile}>
    <Icon class="material-icons" on>image</Icon>
    <Label>Pick Image</Label>
</Button>

<input style="display: none" type="file" name="avatar" accept="image/*" placeholder="avatar" on:change={onFileSelected} bind:this={filePicker} />
