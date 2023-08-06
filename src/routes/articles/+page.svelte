<script>
    import Nav from '../Nav.svelte';
    import Footer from '../Footer.svelte';
    import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
 title="Boofdev - Articles"
 description="On this page i will post articles and news"
 openGraph={{
     url: 'https://boofdev.eu.org/articles',
     title: 'Boofdev - Articles',
     description: 'On this page i will post articles and news',
     images: [
         {
             url: 'https://boofdev.eu.org/data/images/logoround.png',
         }
     ]
 }}
 />

<svelte:head>
    <meta name="HandheldFriendly" content="True">
    <meta property="article:published_time" content="">
    <meta property="article:modified_time" content="">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:site_name" content="Boofdev portfolio">
    <meta name="twitter:site" content="Boofdev portfolio">
    <meta property="og:type" content="Portfolio">
    <meta property="og:title" content="Boofdev portfolio">
    <meta name="twitter:title" content="Boofdev portfolio">
    <meta property="og:url" content="https://boofdev.eu.org">
    <meta name="twitter:url" content="https://boofdev.eu.org">
    <meta property="og:image" content="https://boofdev.eu.org/data/images/logoround.png">
    <meta name="twitter:image" content="https://boofdev.eu.org/data/images/logoround.png">
    <meta name="description" content="This is my portfolio.">
    <meta name="twitter:description" content="This is my portfolio.">
    <meta property="og:image:width" content="1920">
    <meta property="og:image:height" content="1080">
    <meta name="keywords" content="Portfolio, Website, Boofdev, ">
    <meta property="article:tag" content="Portfolio">
    <meta property="article:tag" content="Website">
    <meta property="article:tag" content="Boofdev">
    <meta property="article:tag" content="">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boofdev - News</title>
    <link rel="shortcut icon" href="../data/images/logoround.png">
    <link rel="icon" type="image/x-icon" href="../data/images/logoround.png">
    <link rel="stylesheet" href="../data/style/style.css">
    <link rel="stylesheet" href="../data/style/offline-theme-dark.css">
    <link rel="stylesheet" href="../data/style/offline-language-english.css">
    <script src="../index-allpage.js" defer></script>
    <script src="https://hexahigh.github.io/cdn/js/min/offline.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="/data/js/donate-choose.js" defer></script>
    <meta name="CurrentPage" content="news">
</svelte:head>

<Nav/>

<main>
    <noscript>
        <div class="noscriptwrapper">
            <p class="noscripttext">You seem to have Javascript disabled.<br>Some parts of the website may not work
                correctly.</p>
        </div>
    </noscript>

    <a href="#index-intro-contact-btn" id="skip-nav">Skip Navigation</a>

    <a href="#" class="scrollTop"><img src="../data/images/top.svg" alt="Top"></a>

    <div id="index-content">
        <div class="text" style="text-align: center;">
            <h1 class="text" style="text-align: center; color: #1470e9;">Articles</h1>
            <br>
            <p class="text">On this page i will post articles and news.</p>
        </div>
        <br><br>
        <!-- List of articles -->
        <div class="text" style="margin-left: 75px;">
            <h2>2023:</h2>
            <p><a class="colorurl" href="/articles/test-article">Test article - 6/08/2023</a></p>
        </div>
        <!-- Donation popup -->
        <div id="donate-choose-overlay"></div>
        <div id="donate-choose-popup">
            <h3 style="margin-top: 25px; text-align: center;" class="text">Choose a donation method</h3>
                <div
                    style="display: flex; text-align: center; float: left; width: 50%; height: 100%; align-items: center; justify-content: center;">
                    <img onclick="window.location.href='https://patreon.com/boofdev'" class="donate-choose-button-image"
                        src="/data/images/patreon-vector-logo-2023.svg" width="50%">
                </div>
                <div
                    style="display: flex; text-align: center; float: right; width: 50%; height: 100%; align-items: center; justify-content: center;">
                    <img onclick="window.location.href='https://www.paypal.com/donate/?hosted_button_id=N2US62KK87SB4'" class="
                        donate-choose-button-image" src="/data/images/PayPal.svg" width="50%">
                </div>
        </div>

    </div>
</main>

<Footer/>