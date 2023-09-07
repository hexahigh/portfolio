<script>
    import { page } from "$app/stores";
</script>

    <img src="https://http.cat/{$page.status}.jpg" alt={$page.status}/>

<style>
    img {
        margin-top: 10%;
        margin-bottom: 10%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
