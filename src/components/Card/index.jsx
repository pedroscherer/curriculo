import React from "react";
import "./index.css";

export default function Card({ title, children }) {
  return (
    <React.Fragment>
      <div className="card-container">
        {title && <h3 className="card-title">{title}</h3>}

        {children}
      </div>
    </React.Fragment>
  );
}
