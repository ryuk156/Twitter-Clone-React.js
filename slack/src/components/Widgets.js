import React from "react";
import "../css/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchicon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets_container">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"1293402299264425984"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MarufZaheen"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
