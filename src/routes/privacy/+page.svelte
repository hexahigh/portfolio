<script>
    import Nav from "../Nav.svelte";
    import Footer from "../Footer.svelte";
    import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
    title="Boofdev - Privacy policy"
    description="Privacy policy for boofdev"
    openGraph={{ url: "https://boofdev.eu.org/privacy", title: "Boofdev - Privacy policy" }}
/>

<Nav/>

<svelte:head>
    <link rel="stylesheet" href="/data/style/style.css">
</svelte:head>

<main>
    <h1>Privacy Policy for boofdev.eu.org</h1>
    <br />
    <p>By using this site you agree to this privacy policy</p>
    <br />
    <h1>Information i collect.</h1>
    <br />
    <p>
        When you submit the form your ip address is also sent to me.<br /> This is
        only used so that i can block the ip if it gets used to spam form submissions.
    </p>
    <br />
    <br />
    <p>
        This site uses analytics.<br />This may contain information like how
        long you visited the site, what country you are from and the pages that
        you viewed on the website.
    </p>
    <br />
    <h1>What i do with this information.</h1>
    <p>Your information is not shared with anyone except me.</p>
    <p>
        The ip address you sent when using the form will be stored for 30 days
        and if it wasnt used to spam form submissions within those 30 days it
        will be deleted after 30 days.<br />
        However, if the ip address was used to spam submissions it will be put in
        a database of blocked ip's and be kept there for an unknown amount of time.
    </p>
</main>

<Footer/>