import React from 'react';
import './index.css';

export default function SocialIcon({ icon, url }) {
  return (
    <React.Fragment>
      <div className="icon-content">
        <a target="_blank" href={url}>
          {icon}
        </a>
      </div>
    </React.Fragment>
  );
}
