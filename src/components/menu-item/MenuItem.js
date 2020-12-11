import React from "react";
import "./MenuItem.scss";
function MenuItem(props) {
  return (
    <div className={`${props.size} menu-item`}>
    <div className = 'background-image'
      style={{
        backgroundImage: `url(${props.imageUrl})`
      }}
      
    />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>

        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
}

export default MenuItem;
