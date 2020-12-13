import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

function MenuItem({size,imageUrl,title,history,linkUrl,match}) {
  return (
    <div className={`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}`)}>
    <div className = 'background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      
    />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>

        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
