<script>
    import { page } from "$app/stores";
</script>

<div class="full-page-image">
    <img src="https://http.cat/{$page.status}.jpg" alt={$page.status} class="img" />
</div>

<style>
    .full-page-image {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
