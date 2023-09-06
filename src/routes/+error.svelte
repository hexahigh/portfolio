<script>
    import { page } from "$app/stores";
</script>

<body>
    <img src="https://http.cat/{$page.status}" alt={$page.status} class="img" />
</body>

<style>
    .img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        top: 0;
        left: 0;
    }
</style>
