import React from "react";
import { IoLocationSharp, IoMailOpenSharp, IoLinkSharp } from "react-icons/io5";

import "./index.css";

export default function UserInfo() {
  return (
    <React.Fragment>
      <div className="info-content">
        <div className="info-item">
          <IoLocationSharp size={18} color="#ccd1d6" />
          <span>Canoas/RS</span>
        </div>
        <div className="info-item">
          <IoMailOpenSharp size={18} color="#ccd1d6" />
          <a
            href="mailto:pedrosalves7@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <label>pedrosalves7@gmail.com</label>
          </a>
        </div>
        <div className="info-item">
          <IoLinkSharp size={18} color="#ccd1d6" />
          <a
            href="https://github.com/pedroscherer"
            target="_blank"
            rel="noreferrer"
          >
            <label>https://github.com/pedroscherer</label>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
