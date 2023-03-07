<script lang="ts">
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';

    export let text: string | undefined = undefined;
</script>

<div>
    <FormField>
        <Checkbox/>
        <p slot="label">{text}</p>
    </FormField>
</div>
