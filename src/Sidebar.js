import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvP2sEisutdDRKKVexv3SZQS-spaw-YitpByho5yjvMiPFZXHb-C2PZwhw6NemyqNoGA&usqp=CAU]"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Mostafa Sadeghi</h2>
        <h4>This is mostafa sadeghi, the professional Fullstack developer</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You:</p>
          <p>2,524</p>
        </div>
        <div className="sidebar__stat">
          <p>View on Post:</p>
          <p>2,126</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("java script")}
        {recentItem("react native")}
        {recentItem("django")}
        {recentItem("python")}
        {recentItem("bootstrap")}
      </div>
    </div>
  );
}

export default Sidebar;
