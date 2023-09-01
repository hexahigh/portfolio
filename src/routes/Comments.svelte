<script>
    import PocketBase from "pocketbase";
    import { FullList } from 'svelte-pocketbase';
    const pb = new PocketBase("https://db.080609.xyz");

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

    document
        .getElementById("comment-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            var user = document.getElementById("user").value;
            var comment = document.getElementById("comment").value;
            addComment(user, comment);
        });
</script>

<form id="comment-form">
    <input type="text" id="user" placeholder="Your name" />
    <textarea id="comment" placeholder="Your comment" />
    <button type="submit">Submit</button>
</form>
<FullList collection="comments" let:records>
    {#each records as record}
      <p>{record.user}</p>
      <p>{record.comment}</p>
    {/each}
    <span slot="error" let:error>{error}</span>
  </FullList>
