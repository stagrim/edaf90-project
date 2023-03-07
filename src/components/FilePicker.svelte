<script lang="ts">
    import Button, { Label, Icon } from '@smui/button';
    import Card from "@smui/card/src/Card.svelte";
    import Media from "@smui/card/src/Media.svelte";

    let filePicker
    let image: string = ""
    let error = false

    export const getImage = () => {
        if (!image) {
            error = true
            return null
        }
        return image
    }

    const onFileSelected = (e: ChangeEventHandler<HTMLInputElement>) => {
        image = e.target.files[0];
        let reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onload = e => {
            error = false
            image = e.target.result
        }
    }

    const selectFile = () => filePicker.click()
</script>

<pre class="status" class:error style="color: #d32f2f">Must select image</pre>

<Card class={error && "image-error"} on:click={selectFile} style="cursor: pointer">
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

<style>
    :global(.image-error) {
        border: 2px solid #d32f2f;
    }

    pre:not(.error) {
        display: none;
    }
</style>
