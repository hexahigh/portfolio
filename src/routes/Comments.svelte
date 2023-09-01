<script>
    import { onMount } from "svelte";
    import Time from "svelte-time";
    import { createAvatar } from "@dicebear/core";
    import { identicon } from "@dicebear/collection";
    import PocketBase from "pocketbase";
    import { pbStore, FullList } from "svelte-pocketbase";
    const pb = new PocketBase("https://db.080609.xyz");
    pbStore.set("https://db.080609.xyz");

    let databaseError = false;

    async function addComment(PID, user, comment) {
        try {
            let avatar = createAvatar(identicon, {
                seed: user,
                size: 128,
            }).toDataUriSync();

            // Create a new comment object with the user's avatar
            const newComment = await pb.collection("comments").create({
                PID,
                user,
                comment,
                timestamp: new Date().toISOString(), // store the current date and time as the timestamp
                avatar: avatar,
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
                var PID = window.location.pathname;
                var user = document.getElementById("user").value;
                var comment = document.getElementById("comment").value;
                addComment(PID, user, comment);
            });
    });
</script>

<h2 style="color: #f5f5f5;">Comments:</h2>

<form id="comment-form">
    <input type="text" id="user" placeholder="Your name" required />
    <textarea id="comment" placeholder="Your comment" required />
    <button type="submit">Submit</button>
</form>
<div id="comments-display" />

<div class="comments-display-wrapper">
    <FullList
        collection="comments"
        batch={50}
        let:records
        on:error={() => (databaseError = true)}
    >
        {#each records.filter((record) => record.PID === window.location.pathname) as record}
            {#if databaseError}
                <div class="error-notice">
                    <img alt="Alert icon" src="/data/images/alert.svg" width="50" height="50"><br>
                    Unable to retrieve comments. The database may be down or you might need to refresh.
                </div>
            {:else}
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
                            Written by <p
                                style="color: #56922c; display: inline;"
                            >
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
            {/if}
        {/each}
        <span slot="error" let:error>{error}</span>
    </FullList>
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
        max-height: 500px;
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
