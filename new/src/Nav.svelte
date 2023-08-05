<script>
    import page from "page";
    import Home from "./App.svelte";
    import About from "./pages/About.svelte";

    // set default component
    let current = Home;
    // Map routes to page. If a route is hit the current
    // reference is set to the route's component
    page("/", () => (current = Home));
    page("/about", () => (current = About));
    // activate router
    page.start();
</script>

<nav>
    <img src="data/images/logoround.png" alt="Boofdev logo" />
    <p class="text" style="font-family: Broadway-custom;">Boofdev</p>
    <ul id="nav-pc">
        <li><a href="index.html" id="nav-active">Home</a></li>
        <li><a class="colorurl" href="about">About me</a></li>
        <li><a href="news/">News</a></li>
        <li><a href="projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a target="_blank" id="nav-donate">Donate</a></li>
    </ul>
    <ul id="nav-mobile">
        <li id="nav-menu-li">
            <button id="nav-menu"
                ><img
                    src="data/images/menu.svg"
                    alt="menu"
                    id="nav-menu-img"
                /></button
            >
        </li>
    </ul>
</nav>

<div class="nav-mobile-content-close">
    <ul>
        <li><a href="index.html" id="nav-active">Home</a></li>
        <li><a href="about">About me</a></li>
        <li><a href="news/">News</a></li>
        <li><a href="projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
            <a
                target="_blank"
                href="https://patreon.com/boofdev"
                id="nav-donate-mobile">Donate</a
            >
        </li>
    </ul>
</div>
