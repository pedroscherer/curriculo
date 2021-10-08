import React, { useEffect, useState } from "react";
import api from "../../services/api";

import Header from "../../components/Header";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import Comments from "../../components/Comments";
import Contact from "../../components/Contact";

import "./index.css";

export default function Home() {
  document.title = "Pedro Alves";

  return (
    <React.Fragment>
      <Header />

      <div className="container">
        <div className="left-column">
          <Card title="Sobre mim">
            <p>
              Write a brief intro about yourself. It's a good idea to include
              your personal interests and hobbies as well. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec. Commodo ligula eget dolor. Aenean massa.
            </p>
          </Card>

          <Card title="Comentários">
            <Comments />
          </Card>

          <Card title="Comentários">
            <Contact />
          </Card>
        </div>
        <div className="right-column">
          <Card>
            <UserInfo />
          </Card>

          <Card title="Habilidades">
            <p>
              Intro about your skills goes here. Keep the list lean and only
              show your primary skillset. You can always provide a link to your
              Linkedin or Github profile so people can get more info there.
            </p>

            <h4>Python & Django</h4>
            <h4>Javascript & jQuery</h4>
            <h4>HTML5, CSS3, SASS & LESS</h4>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}
