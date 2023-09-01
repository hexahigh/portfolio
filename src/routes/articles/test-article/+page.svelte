<script>
    import Nav from "../../Nav.svelte";
    import Comments from "../../Comments.svelte";
    import Footer from "../../Footer.svelte";
    import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
 title="Boofdev - Test article"
 description="Lorem ipsum"
 openGraph={{
     url: 'https://boofdev.eu/news/test-article',
     title: 'Boofdev - Test article',
     description: 'Lorem ipsum',
     images: [
         {
             url: 'https://boofdev.eu/data/images/articles/test-article/1637846620838.jpg',
         }
     ]
 }}
 />

<svelte:head>
    <link rel="stylesheet" href="/data/style/style.css" />
    <title>Boofdev - Test article</title>
</svelte:head>

<Nav />

<main>
    <div>
        <a class="back-button" href="/articles">⬅Back</a>
    </div>
    <div id="article-main">
        <h1>Lorem ipsum</h1>
        <p id="info">6/08/2023</p>
        <img
            src="/data/images/articles/test-article/1637846620838.jpg"
            alt="Lorem ipsum"
            id="main-img"
        />
        <div id="main-text">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
                urna odio. Quisque pretium lacus nunc, in tristique purus tempus
                sed. Cras pretium sapien sed felis rhoncus blandit. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Nullam sed bibendum nunc. Donec pretium ex
                tortor, sit amet ultricies justo ullamcorper facilisis.
                Vestibulum sagittis odio iaculis leo pellentesque porta
                pellentesque mattis augue. Praesent turpis massa, vehicula nec
                pellentesque quis, vehicula sit amet nunc. Praesent accumsan
                ultricies massa, sit amet tincidunt urna. Curabitur et tortor
                non lorem cursus tempor at ac eros. Suspendisse iaculis arcu
                quis risus congue, at hendrerit nisi malesuada.
            </p>
            <br />
            <p>
                Morbi vestibulum euismod condimentum. Pellentesque sagittis
                ullamcorper nisi, vel vestibulum mauris venenatis non. Donec
                mattis efficitur elit a volutpat. Phasellus consequat elit non
                elit maximus, pharetra porttitor quam placerat. Vestibulum
                varius ac est at placerat. Aliquam mauris nisi, semper nec mi
                eget, pretium ultrices ex. Nunc iaculis suscipit sapien, quis
                ullamcorper neque molestie ut. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Phasellus in efficitur erat. Fusce consectetur diam diam, non
                sagittis est molestie ac.
            </p>
            <br />
            <p>
                Donec sollicitudin eleifend elit, ut luctus ante dictum eu.
                Maecenas sodales, lectus sed dictum maximus, lorem dolor
                convallis dui, at auctor magna purus id risus. Duis interdum,
                nisi eu rhoncus pharetra, mi sem condimentum quam, hendrerit
                tempus risus nibh non eros. Morbi sed ante urna. In tellus diam,
                imperdiet vel ultrices nec, aliquet at tellus. Vivamus nisl
                erat, ullamcorper ut sapien at, ultricies gravida quam. Nulla
                non feugiat mi, eu pellentesque quam. Morbi sit amet magna nisl.
            </p>
        </div>
    </div>
    <Comments/>
</main>

<Footer />

<style>
    #main-img {
        width: 25%;
    }

    #info {
        color: #b4b4b4;
    }

    #main-text {
        margin-left: 10%;
        margin-right: 10%;
    }

    #article-main {
        margin-top: 20px;
        text-align: center;
        color: #ffffff;
    }

    .back-button {
        background: #1470e9;
        border: none;
        color: #ffffff;
        border-radius: 6px;
        font-size: 1.1rem;
        padding: 0.4rem 1.4rem;
        font-weight: 400;
        cursor: pointer;
        transition: 300ms ease;
        position: relative;
        margin-left: 10%;
    }
</style>
