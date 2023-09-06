<script>
    import { page } from '$app/stores';
</script>

<img src="https://http.cat/{$page.status}" alt="{$page.status}">

<h1>{$page.status}: {$page.error.message}</h1>