<style>
    :root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
</style>

<script>
    import { onMount } from "svelte";
    import PocketBase from "pocketbase";
    import { pbStore, FullList } from 'svelte-pocketbase';
    const pb = new PocketBase("https://db.080609.xyz");
    pbStore.set("https://db.080609.xyz");

    async function addComment(user, comment) {
        try {
            const newComment = await pb.collection("comments").create({
                user,
                comment,
                timestamp: new Date().toISOString(), // store the current date and time as the timestamp
            });
            console.log("Comment added:", newComment);
        } catch (error) {
            console.error("Failed to add comment:", error);
        }
    }
    onMount(() => {
        document
            .getElementById("comment-form")
            .addEventListener("submit", function (event) {
                event.preventDefault();
                var user = document.getElementById("user").value;
                var comment = document.getElementById("comment").value;
                addComment(user, comment);
            });

    });
</script>

<form id="comment-form">
    <input type="text" id="user" placeholder="Your name" />
    <textarea id="comment" placeholder="Your comment" />
    <button type="submit">Submit</button>
</form>
<div id="comments-display"></div>

<FullList collection="comments" batch={50} let:records>
    {#each records as record}
      <div>
        <p>{record.user}</p>
        <p>{record.timestamp}</p>
        <p>{record.comment}</p>
      </div>
    {/each}
    <span slot="error" let:error>{error}</span>
  </FullList>