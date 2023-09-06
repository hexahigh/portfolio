<script>
    import { page } from "$app/stores";
</script>

<body>
    <img src="https://http.cat/{$page.status}" alt={$page.status} class="bg" />
</body>

<style>
    body,
    html {
        height: 100%;
        margin: 0;
    }

    .bg {
        /* Full height */
        height: 100%;

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
