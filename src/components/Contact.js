import React from 'react';
import './Contact.css';


function Contact() {
  const userName = "Sue Harper";
  const userAvatar = "https://randomuser.me/api/portraits/women/61.jpg";

  return (
    <div className="Contact">
      <img src={userAvatar} alt={userName} className="avatar" />
      <div>
        <div className="name">{userName}</div>
        <div className="status">
          <span className="status-online" />
          <span className="status-text">online</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
