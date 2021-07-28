import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input"></div>
        <CreateIcon />
        <form action="">
          <input type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
