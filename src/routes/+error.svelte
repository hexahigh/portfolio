<script>
    import { page } from "$app/stores";
</script>
<h1>{$page.status}</h1>
<h3>{$page.error.message}</h3>
<img src="https://http.cat/{$page.status}.jpg" alt={$page.status} class="img"/>

<style>
    .img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>
