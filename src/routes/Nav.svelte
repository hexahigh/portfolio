<script>
    import { page } from '$app/stores';
</script>

<style>
    #nav-active {
        color: #ffffff;
    }
</style>

<nav>
    <img src="/data/images/logoround.png" alt="Boofdev logo" />
    <p class="text" style="font-family: Broadway-custom;">Boofdev</p>
    <ul id="nav-pc">
        <li><a href="/" id:nav-active={$page.url.pathname === '/'}>Home</a></li>
        <li><a class="colorurl" href="about" id:nav-active={$page.url.pathname === '/about'}>About me</a></li>
        <li><a href="news/" id:nav-active={$page.url.pathname === '/news'}>News</a></li>
        <li><a href="projects" id:nav-active={$page.url.pathname === '/projects'}>Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><a target="_blank" id="nav-donate">Donate</a></li>
    </ul>
    <ul id="nav-mobile">
        <li id="nav-menu-li">
            <button id="nav-menu"
                ><img
                    src="/data/images/menu.svg"
                    alt="menu"
                    id="nav-menu-img"
                /></button
            >
        </li>
    </ul>
</nav>

<div class="nav-mobile-content-close">
    <ul>
        <li><a href="/" id:nav-active={$page.url.pathname === '/'}>Home</a></li>
        <li><a href="about" id:nav-active={$page.url.pathname === '/about'}>About me</a></li>
        <li><a href="news/" id:nav-active={$page.url.pathname === '/news'}>News</a></li>
        <li><a href="projects" id:nav-active={$page.url.pathname === '/projects'}>Projects</a></li>
        <li><a href="#contact" id:nav-active={$page.url.pathname === '/'}>Contact</a></li>
        <li>
            <a
                target="_blank"
                href="https://patreon.com/boofdev"
                id="nav-donate-mobile">Donate</a
            >
        </li>
    </ul>
</div>
