import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const data = [
    { id: 1, name: "nikan", description: "This is Nikan sadeghi roudbari" },
    { id: 2, name: "msa", description: "من مصطفی صادقی رودباری هستم" },
  ];
  useEffect(() => {
    setPosts(data);
  }, []);
  const sendData = (e) => {
    e.preventDefault();
    const all_posts = [...posts];
    const new_post = { id: 10, description: "This is test" };
    new_post.name = input;
    all_posts.push(new_post);
    setPosts(all_posts);
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button onClick={sendData} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="photo" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="event"
            color="#7Fc15E"
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          description={post.description}
          message={post.message}
        />
      ))}
    </div>
  );
};

export default Feed;
