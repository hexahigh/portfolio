<script>
	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
	export let name;
</script>

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
    <meta property="og:url" content="https://boofdev.eu">
    <meta name="twitter:url" content="https://boofdev.eu">
    <meta property="og:image" content="https://boofdev.eu/data/images/logoround.png">
    <meta name="twitter:image" content="https://boofdev.eu/data/images/logoround.png">
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
    <title>Boofdev</title>
    <link rel="shortcut icon" href="data/images/logoround.png">
    <link rel="icon" type="image/x-icon" href="/data/images/logoround.png">
    <link rel="stylesheet" href="data/style/style.css">
    <link rel="stylesheet" href="data/style/offline-theme-dark.css">
    <link rel="stylesheet" href="data/style/offline-language-english.css">
    <script src="index.js" defer></script>
    <script src="data/js/contact.js" defer></script>
    <script src="index-allpage.js" defer></script>
    <script src="https://hexahigh.github.io/cdn/js/min/offline.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="data/js/donate-choose.js" defer></script>
    <meta name="CurrentPage" content="Homepage">
</svelte:head>

<main>
    <noscript>
        <div class="noscriptwrapper">
            <p class="noscripttext">You seem to have Javascript disabled.<br>Some parts of the website may not work
                correctly.</p>
        </div>
    </noscript>

    <a href="#index-intro-contact-btn" id="skip-nav">Skip Navigation</a>

	<Nav/>

    <a href="#" class="scrollTop"><img src="data/images/top.svg" alt="Top"></a>

    <div id="index-content">
        <div class="index-intro">
            <h1 class="text">Hi, I'm <span>Boof</span></h1>
            <h2 class="text">Hobbyist Programmer</h2>
            <h3 class="text">I have been making websites and software for over 2 years and im constantly trying to learn new things.</h3>
            <h3><a href="about">About me</a></h3>
            <a href="#contact"><button id="index-intro-contact-btn">Contact</button></a>
        </div>
        <div class="index-socials">
            <a href="mailto:admin@boofdev.eu"><img src="data/images/email-white.svg" alt="Email" class="tw-inline"></a>
            <a href="https://github.com/hexahigh"><img src="data/images/github.svg" alt="Github" class="tw-inline"></a>
            <a href="https://www.youtube.com/@Boofydev"><img src="data/images/youtube.svg" alt="Youtube" class="tw-inline"></a>
        </div>
    </div>
    <div id="skills"></div>
    <div class="skills">
        <h1 class="text tw-text-3xl tw-font-semibold">Skills:</h1>
        <div class="skills-item">
            <img src="data/images/html.png" alt="HTML" class="tw-inline">
            <p class="text">HTML</p>
        </div>
        <div class="skills-item">
            <img src="data/images/css.png" alt="CSS" class="tw-inline">
            <p class="text">CSS</p>
        </div>
        <div class="skills-item">
            <img src="data/images/js.png" alt="Javascript" class="tw-inline">
            <p class="text">Javascript</p>
        </div>
        <div class="skills-item">
            <img src="data/images/gopher.svg" alt="Golang" class="tw-inline">
            <p class="text">Go</p>
        </div>
        <div class="skills-item">
            <img src="data/images/Tux.svg" alt="Linux" class="tw-inline">
            <p class="text">Linux</p>
        </div>
    </div>
    <!-- Donation popup -->
    <div id="donate-choose-overlay"></div>
    <div id="donate-choose-popup">
        <h3 style="margin-top: 25px; text-align: center;" class="text">Choose a donation method</h3>
        <div style="display: flex; text-align: center; float: left; width: 50%; height: 100%; align-items: center; justify-content: center;">
            <img onclick="window.location.href='https://patreon.com/boofdev'" class="donate-choose-button-image" src="data/images/patreon-vector-logo-2023.svg" width="50%">
        </div>
        <div style="display: flex; text-align: center; float: right; width: 50%; height: 100%; align-items: center; justify-content: center;">
            <img onclick="window.location.href='https://www.paypal.com/donate/?hosted_button_id=N2US62KK87SB4'" class="donate-choose-button-image" src="data/images/PayPal.svg" width="50%">
        </div>
    </div>
    <!-- Contact Form -->
    <div id="contact"></div>
    <div class="contact">
        <div class="contact-sidepanel">
            <div class="contact-socials">
                <p class="text">Contact</p>
                <span class="text">Send me a message via the contact form, email or via socials</span>
            </div>
            <br>
            <div class="contact-socials">
                <p class="text">Socials</p>
                <a href="mailto:admin@boofdev.eu"><img src="data/images/email-white.svg" alt="Email" class="tw-inline"></a>
                <a href="https://github.com/hexahigh"><img src="data/images/github.svg" alt="Github" class="tw-inline"></a>
                <a href="https://www.youtube.com/@Boofydev"><img src="data/images/youtube.svg" alt="Youtube" class="tw-inline"></a>
            </div>
        </div>
        <form id="formid" class="contact-form"
            action="https://public.herotofu.com/v1/fed039b0-89d2-11ed-a003-6f0b76086b1c" method="post">
            <label for="name">full name</label>
            <input name="Name" id="name" type="text" required>
            <label for="email">email</label>
            <input name="EMAIL" id="EMAIL" type="email" required>
            <label for="subject">subject</label>
            <input name="subject" id="subject" type="text">
            <label for="message">message</label>
            <input name="message" id="message" rows="3" required>
            <input value="" name="formip" id="formip" type="hidden" required>
            <input value="" name="usedvpn" id="usedvpn" type="hidden" required>
            <p style="font-size: 50%; color:#ffffff">When you submit this form you agree to the <a class="colorurl"
                    href="/privacy">Privacy Policy</a></p>
            <button id="submitbutton" type="submit">Send Message</button>
            <button class="emailformbutton" id="emailformbutton" type="button">Subscribe to my newsletter</button>
        </form>
    </div>
    <!-- Email Form -->
    <div id="email-form-overlay"></div>
    <div id="email-form-popup">
        <iframe width="540" height="305"
            data-src="https://22242122.sibforms.com/serve/MUIEAE9tO8E-2qIVUjLIq5d1rGyLjfSf9XaNOkGwfldY3MLGMd1imG_ezwWEohIPhaegttdiIuu4ur-zyYPWHrmg2jywJ3lK3Kq5ScK3BSIEuqL1sJo-i2BjgUiI2KhHO3tUl2WzHT6-beraG-eJ7K8BG4yZLwok5FhdrOgoMEcAdCSwy7ucVX-PO7EXaqDbKPuNV4W_rI8PXT--"
            id="email-popup-iframe" frameborder="0" scrolling="auto" allowfullscreen
            style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
    </div>
	<Footer />

</main>

<style>

</style>