<script>
    import { onMount } from "svelte";
    import PocketBase from "pocketbase";
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
    onMount(() => {
        document
            .getElementById("comment-form")
            .addEventListener("submit", function (event) {
                event.preventDefault();
                var user = document.getElementById("user").value;
                var comment = document.getElementById("comment").value;
                addComment(user, comment);
            });

        async function getComments() {
            try {
                const comments = await pb.collection("comments").getList();
                console.log("Comments:", comments);
                return comments;
            } catch (error) {
                console.error("Failed to get comments:", error);
            }
        }

        getComments().then((comments) => {
            // Get the comments display div
            var commentsDisplay = document.getElementById("comments-display");

            // Generate the HTML for each comment
            for (var i = 0; i < comments.length; i++) {
                // Create a new div for the comment
                var commentDiv = document.createElement("div");

                // Create a paragraph for the user's name
                var userP = document.createElement("p");
                userP.textContent = comments[i].user;
                commentDiv.appendChild(userP);

                // Create a paragraph for the comment text
                var commentP = document.createElement("p");
                commentP.textContent = comments[i].comment;
                commentDiv.appendChild(commentP);

                // Add the comment div to the comments display div
                commentsDisplay.appendChild(commentDiv);
            }
        });
    });
</script>

<form id="comment-form">
    <input type="text" id="user" placeholder="Your name" />
    <textarea id="comment" placeholder="Your comment" />
    <button type="submit">Submit</button>
</form>
<div id="comments-display" />
