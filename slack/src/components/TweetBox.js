import React, { useState } from "react";
import "../css/TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "../firebase/firebase.js";
function TweetBox() {
  const [tweetmessage, settweetmessage] = useState("");
  const [tweetimage, settweetimage] = useState("");
  function sendTweet(e) {
    e.preventDefault();
    db.collection("Post").add({
      avatar: "https://www.brandeps.com/icon-download/B/Boy-icon-vector-01.svg",
      displayName: "Yash Patel",
      userName: "@yashpatel12",

      verified: true,

      image: tweetimage,
      text: tweetmessage,
    });
    settweetmessage("");
    settweetimage("");
  }
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://www.brandeps.com/icon-download/B/Boy-icon-vector-01.svg" />
          <input
            type="text"
            placeholder="what's happening?"
            value={tweetmessage}
            onChange={(e) => settweetmessage(e.target.value)}
          />
        </div>
        <input
          type="text"
          className="twitterbox__InputImage"
          placeholder="Optional: Enter Image URL"
          value={tweetimage}
          onChange={(e) => settweetimage(e.target.value)}
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetbox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
