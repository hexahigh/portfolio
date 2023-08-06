<script>
    import Nav from "../Nav.svelte";
    import Footer from "../Footer.svelte";
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Boofdev - Projects</title>
    <link rel="shortcut icon" href="../data/images/logoround.png" />
    <link rel="icon" type="image/x-icon" href="../data/images/logoround.png" />
    <link rel="stylesheet" href="../data/style/style.css" />
    <script src="../index-allpage.js" defer></script>
    <link rel="stylesheet" href="../data/style/offline-theme-dark.css" />
    <link rel="stylesheet" href="../data/style/offline-language-english.css" />
    <script src="https://hexahigh.github.io/cdn/js/min/offline.min.js"></script>
    <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
    ></script>
    <script src="/data/js/donate-choose.js" defer></script>
    <meta name="CurrentPage" content="projects" />
</svelte:head>

<Nav />

<main>
    <a href="#index-intro-contact-btn" id="skip-nav">Skip Navigation</a>

    <a href="#" class="scrollTop"
        ><img src="../data/images/top.svg" alt="Top" /></a
    >

    <div id="index-content">
        <div class="index-intro">
            <h1><span>Projects</span></h1>
            <h2>Here are some of the projects that im working on.</h2>
            <br />
            <br />
            <div class="projectscompact">
                <h3>
                    <a class="colorurl" href="https://boof.eu.org">Main site:</a
                    >
                </h3>
                <br />
                <h4 class="text">
                    On this site i have games, tools and software.<br />
                    Some of which i have made, but most of them arent.
                </h4>
            </div>
            <div class="projectscompact">
                <h3>
                    <a class="colorurl" href="https://discord.gg/eRCNMuTnpn"
                        >Havocado Reborn</a
                    >
                </h3>
                <a href="https://discord.gg/eRCNMuTnpn"
                    ><img
                        class="projectimg"
                        src="../data/images/havocado.png"
                        alt="Havocado banner"
                    /></a
                >
                <h4 class="text">
                    A project for the game Havocado.<br />
                    The goal is to be able to add custom maps and skins.
                </h4>
            </div>
        </div>
        <!-- Donation popup -->
        <div id="donate-choose-overlay" />
        <div id="donate-choose-popup">
            <h3 style="margin-top: 25px; text-align: center;" class="text">
                Choose a donation method
            </h3>
            <div
                style="display: flex; text-align: center; float: left; width: 50%; height: 100%; align-items: center; justify-content: center;"
            >
                <img
                    onclick="window.location.href='https://patreon.com/boofdev'"
                    class="donate-choose-button-image"
                    src="/data/images/patreon-vector-logo-2023.svg"
                    width="50%"
                />
            </div>
            <div
                style="display: flex; text-align: center; float: right; width: 50%; height: 100%; align-items: center; justify-content: center;"
            >
                <img
                    onclick="window.location.href='https://www.paypal.com/donate/?hosted_button_id=N2US62KK87SB4'"
                    class="
                        donate-choose-button-image"
                    src="/data/images/PayPal.svg"
                    width="50%"
                />
            </div>
        </div>
    </div>
</main>

<Footer />
