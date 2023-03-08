import React from 'react';
import './Card.css';

const Card = ({ className, avatar, username, body, image, actions, layout="tweet" }) => {
  return (
    <div className={`w3__card w3__card--${layout}`}>
      {avatar && <div className="w3__card-avatar">{avatar}</div>}
      <div className="w3__card-content">
        {username && <div className="w3__card-header">
          {username}
        </div>}
        {body && <div className="w3__card-body">{body}</div>}
        {image && <div className="w3__card-image">{image}</div>}
        {actions && <div className="w3__card-actions">{actions}</div>}
      </div>
    </div>
  );
};


export default Card;
