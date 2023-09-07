<script>
    import { page } from "$app/stores";
</script>

<div class="full-page-image">
    <img src="https://http.cat/{$page.status}.jpg" alt={$page.status}/>
</div>

<style>
    img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
</style>
