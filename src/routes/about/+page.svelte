<script>
	import Footer from '../Footer.svelte';
	import Nav from '../Nav.svelte';
	export let name;

    let fact = fetch("https://boofdev.eu/api/fact")
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boofdev - About</title>
    <link rel="shortcut icon" href="../data/images/logoround.png">
    <link rel="icon" type="image/x-icon" href="../data/images/logoround.png">
    <link rel="stylesheet" href="../data/style/style.css">
    <script src="../index-allpage.js" defer></script>
    <link rel="stylesheet" href="../data/style/offline-theme-dark.css">
    <link rel="stylesheet" href="../data/style/offline-language-english.css">
    <script src="https://hexahigh.github.io/cdn/js/min/offline.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="/data/js/donate-choose.js" defer></script>
    <meta name="CurrentPage" content="about">
</svelte:head>

<Nav/>

<main>
    <a href="#index-intro-contact-btn" id="skip-nav">Skip Navigation</a>

    <a href="#" class="scrollTop"><img src="../data/images/top.svg" alt="Top"></a>

    <div id="index-content">
        <div>
            <h1><span style="color: #1470e9;">About me</span></h1>
            <h3 class="text">I enjoy playing video games and programming.</h3>
        </div>
        <div>
            <br>
            <p class="text">My real name is Simon and i live in a city called Fredrikstad in Norway.</p>
            <p class="text">I like playing games and coding.</p>
            <p class="text">Some of my favorite games are Outer Wilds and Team fortress 2.</p>
            <p class="text">I have been interested in computers for a very long time.</p>
            <p class="text">Im good at HTML, Css, Javascript and Golang (I love golang)</p>
            <p class="text">I like archiving stuff to the <a class="colorurl" href="https://archive.org">Internet Archive</a></p>
            <p class="text">Im open for commisions and you can hire me to make something.</p>
            <br>
            <p class="text">Random fact: {fact.text()}</p>
            <br>
            <p class="colorurl"><a class="colorurl" href="../data/text/dsa-public-key.txt">DSA public-key</a></p>
            <p class="colorurl"><a class="colorurl" href="../data/text/rsa-public-key.txt">RSA public-key</a></p>
            <p class="text" style="text-align: right;">Last updated: 31/07/2023</p>
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