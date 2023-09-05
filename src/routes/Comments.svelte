<script>
    import { onMount } from "svelte";
    import Time from "svelte-time";
    import { createAvatar } from "@dicebear/core";
    import { identicon } from "@dicebear/collection";
    import PocketBase from "pocketbase";
    import { each } from "svelte/internal";

    const pb = new PocketBase("https://db.080609.xyz");

    let databaseError = false;
    let comments = [];

    async function fetchComments() {
        try {
            comments = await pb.collection("comments").getFullList();
            comments = comments.filter(
                (comment) =>
                    comment.PID === window.location.pathname &&
                    comment.blocked !== true
            );
        } catch (error) {
            console.error("Failed to fetch comments:", error);
            databaseError = true;
        }
    }

    async function addComment(PID, user, comment) {
        let blocked = false;

        if (checkBad(comment) == true) {
            blocked = true;
        }

        try {
            let avatar = createAvatar(identicon, {
                seed: user,
                size: 128,
            }).toDataUriSync();

            await pb.collection("comments").create({
                PID,
                user,
                comment,
                timestamp: new Date().toISOString(),
                avatar: avatar,
                blocked: blocked,
            });

            fetchComments();
        } catch (error) {
            console.error("Failed to add comment:", error);
        }
    }

    onMount(fetchComments);

    onMount(() => {
        document
            .getElementById("comment-form")
            .addEventListener("submit", function (event) {
                event.preventDefault();
                var PID = window.location.pathname;
                var user = document.getElementById("user").value;
                var comment = document.getElementById("comment").value;
                addComment(PID, user, comment);
            });
    });

    function checkBad(input) {
        let blocked = false;
        let input2 = input.split(" ");

        fetch("/data/text/bad-words.txt")
            .then((response) => response.arrayBuffer())
            .then((arrayBuffer) => {
                const decoder = new TextDecoder("utf-8");
                const data = decoder.decode(new Uint8Array(arrayBuffer));
                const array = data.split("\n");
                console.log(array)
                input2.forEach(element => {
                    console.log(element)
                    if (array.includes(element)) {
                        blocked = true;
                    }
                });
            });
        return blocked;
    }
</script>

<h2 style="color: #f5f5f5;">Comments:</h2>

<form id="comment-form">
    <input type="text" id="user" placeholder="Your name" required />
    <textarea id="comment" placeholder="Your comment" required />
    <button type="submit">Submit</button>
</form>
<div id="comments-display" />

<div class="comments-display-wrapper">
    {#each comments as record}
        <div class="comments-display">
            <div class="avatar">
                <img
                    src={record.avatar}
                    alt="User Avatar"
                    width="50"
                    height="50"
                />
            </div>
            <div class="right-side">
                <div class="commentHeader">
                    Written by <p style="color: #56922c; display: inline;">
                        {record.user}
                    </p>
                    at <Time
                        timestamp={record.timestamp}
                        format="DD/MM/YYYY, hh:mm"
                    />
                </div>
                <div class="commentText">
                    <p>{record.comment}</p>
                </div>
            </div>
        </div>
    {/each}
    {#if databaseError}
        <div class="error-notice">
            <img
                alt="Alert icon"
                src="/data/images/alert.svg"
                width="50"
                height="50"
            /><br />
            Unable to retrieve comments. The database may be down or you might need
            to refresh.
        </div>
    {/if}
</div>

<style>
    .error-notice {
        text-align: center;
        color: #f5a803;
    }

    .comments-display {
        background-color: #1b1b1b;
        min-width: 250px;
        border-spacing: 0 10px;
        border-collapse: separate !important;
        color: #f5f5f5;
        font-size: 14px;
        line-height: 1.42857143;
    }

    .comments-display-wrapper {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0 10px;
        clear: both;
        margin-top: 6px !important;
        margin-bottom: 6px !important;
        max-width: none !important;
        border-collapse: separate !important;
        background-color: transparent;
        overflow-y: auto; /* Add vertical scroll if needed */
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

    .avatar {
        float: left;
        width: 70px;
        height: 100%;
        border-radius: 2px;
        margin: 0 15px;
    }
</style>
