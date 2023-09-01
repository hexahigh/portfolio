<script>
    import { onMount } from "svelte";
    import axios from "axios";
    import PocketBase from "pocketbase";
    import { pbStore, FullList } from "svelte-pocketbase";
    const pb = new PocketBase("https://db.080609.xyz");
    pbStore.set("https://db.080609.xyz");

    async function addComment(user, comment) {
        try {
            // Generate the avatar URL using the DiceBear API
            const avatarUrl = `https://avatars.dicebear.com/api/avataaars/${user}.svg`;

            // Make a request to retrieve the avatar image
            const response = await axios.get(avatarUrl, {
                responseType: "text",
            });

            // Create a new comment object with the user's avatar
            const newComment = await pb.collection("comments").create({
                user,
                comment,
                timestamp: new Date().toISOString(), // store the current date and time as the timestamp
                avatar: response.data, // Store the SVG avatar image
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
<div id="comments-display" />

<FullList collection="comments" batch={50} let:records>
    {#each records as record}
        <div class="comments-display">
            <img src={record.avatar} alt="User Avatar" width="50" height="50" />
            <div class="right-side">
                <div class="commentHeader">
                    <p>{record.user}</p>
                    <p>{record.timestamp}</p>
                </div>
                <div class="commentText">
                    <p>{record.comment}</p>
                </div>
            </div>
        </div>
    {/each}
    <span slot="error" let:error>{error}</span>
</FullList>

<style>
    .comments-display {
        background-color: #1b1b1b;
        min-width: 250px;
    }

    .right-side {
        float: left;
        width: calc(100% - 100px);
    }

    .commentHeader {
        text-align: left;
        display: block;
        padding: 10px;
        margin-top: 2px;
        display: inline-block;
    }

    .commentText {
        text-align: left;
        padding-left: 10px;
        color: #978f8f;
        word-wrap: break-word;
        min-height: 30px;
        padding-bottom: 10px;
    }
</style>
