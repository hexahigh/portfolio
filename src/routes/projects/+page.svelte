<script>
    import Nav from "../Nav.svelte";
    import Footer from "../Footer.svelte";
    import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
 title="Boofdev - Projects"
 description="Here you can find some of the projects im working on."
 openGraph={{
     url: 'https://boofdev.eu.org/projects',
     title: 'Boofdev - Projects',
     description: 'Here you can find some of the projects im working on.',
     images: [
         {
             url: 'https://boofdev.eu.org/data/images/logoround.png',
         }
     ]
 }}
 />

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
                    <a class="colorurl" href="https://boof.eu.org">Main site</a
                    >
                </h3>
                <h4 class="text" style="max-width: 30%;">
                    This is basically just a place where i put random prototypes and other things i have made when i have been bored. It also contains a few games.
                </h4>
            </div>
            <div class="projectscompact">
                <h3><a class="colorurl" href="https://gitte.080609.xyz">Gitte</a></h3>   
                <h4 class="text" style="max-width: 30%;">
                    My selfhosted gitea instance. It is run on a raspberry pi 4 which at the moment has no cooling. So i cannot guarentee 100% uptime.
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
                    alt="Patreon"
                    width="50%"
                />
            </div>
            <div
                style="display: flex; text-align: center; float: right; width: 50%; height: 100%; align-items: center; justify-content: center;"
            >
                <!-- svelte-ignore a11y-missing-attribute -->
                <img
                    onclick="window.location.href='https://www.paypal.com/donate/?hosted_button_id=N2US62KK87SB4'"
                    class="
                        donate-choose-button-image"
                    src="/data/images/PayPal.svg"
                    alt="PayPal"
                    width="50%"
                />
            </div>
        </div>
    </div>
</main>

<Footer />
