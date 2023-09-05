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
    let badWords = [];
    let showBlocked = false;

    $: fetchComments(), showBlocked;

    async function fetchComments() {
        try {
            comments = await pb.collection("comments").getFullList();
            comments = comments.filter(
                (comment) =>
                    comment.PID === window.location.pathname &&
                    (showBlocked || !comment.blocked)
            );
        } catch (error) {
            console.error("Failed to fetch comments:", error);
            databaseError = true;
        }
    }

    async function addComment(PID, user, comment) {
        
        if (exceedsCharacterLimit(user, 20) || exceedsCharacterLimit(comment, 300)) {
            console.error(
                "Username or comment exceeds the maximum character limit."
            );
            return;
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
                blocked: containsBadWord(comment),
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

    onMount(async () => {
        const response = await fetch("/data/text/bad-words.txt");
        const text = await response.text();
        badWords = text.split("\n");
    });

    function containsBadWord(input) {
        for (let i = 0; i < badWords.length; i++) {
            if (input.includes(badWords[i])) {
                return true;
            }
        }
        return false;
    }

    function exceedsCharacterLimit(input, limit) {
        if (input.length > limit) {
            return true;
        }
        return false;
    }
</script>

<h2 style="color: #f5f5f5;">Comments:</h2>

<form id="comment-form">
    <input type="text" id="user" placeholder="Your name" required />
    <textarea id="comment" placeholder="Your comment" required />
    <button type="submit">Submit</button>
</form>
<div id="comments-display" />
<div class="switch-container">
    <p class="text">Show blocked comments:</p>
    <div class="switch">
        <input type="checkbox" id="switch" bind:checked={showBlocked} />
        <label for="switch" />
    </div>
</div>
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
    .switch-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .switch label {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
        border-radius: 34px;
    }

    .switch label:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
    }

    input:checked + label {
        background-color: #1470e9;
    }

    input:checked + label:before {
        transform: translateX(26px);
    }

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
