import React from 'react';
import { IoLocationSharp, IoMailOpenSharp, IoLinkSharp } from 'react-icons/io5';

import './index.css';

export default function UserInfo({}) {
  return (
    <React.Fragment>
      <div className="info-content">
        <div className="info-item">
          <IoLocationSharp size={15} color="#ccd1d6" />
          <label>Canoas/RS</label>
        </div>
        <div className="info-item">
          <IoMailOpenSharp size={15} color="#ccd1d6" />
          <label>pedrosalves7@gmail.com</label>
        </div>
        <div className="info-item">
          <IoLinkSharp size={15} color="#ccd1d6" />
          <label>https://github.com/pedroscherer</label>
        </div>
      </div>
    </React.Fragment>
  );
}