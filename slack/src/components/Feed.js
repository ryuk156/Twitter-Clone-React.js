import React, { useState, useEffect } from "react";
import "../css/Feed.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";
import db from "../firebase/firebase.js";
import FlipMove from "react-flip-move";
function Feed() {
  const [post, setpost] = useState([]);

  useEffect(() => {
    db.collection("Post").onSnapshot((snapshot) =>
      setpost(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2> Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {post.map((posts) => (
          <Post
            key={posts.text}
            avatar={posts.avatar}
            displayName={posts.displayName}
            userName={posts.userName}
            verified={posts.verified}
            image={posts.image}
            text={posts.text}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
