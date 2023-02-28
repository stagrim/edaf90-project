<script lang="ts">
    let num = 0

</script>

<h1>{num}</h1>
<button on:click={() => num -= 1}>Decrease</button>
<button on:click={() => num = 0}>Reset</button>
<button on:click={() => num += 1}>Increase</button>
