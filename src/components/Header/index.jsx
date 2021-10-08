import React from 'react';
import './index.css';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithubAlt,
  FaInstagram,
} from 'react-icons/fa';

import SocialIcon from '../SocialIcon';

export default function Header({ name, idade, children }) {
  const socialLinks = [
    {
      icon: <FaFacebookF size={20} color="#fff" />,
      url: "https://www.facebook.com/PedroSchererRS",
    },
    {
      icon: <FaLinkedinIn size={20} color="#fff" />,
      url: "https://www.linkedin.com/in/pedro-scherer-alves-071b25193/",
    },
    {
      icon: <FaGithubAlt size={20} color="#fff" />,
      url: "https://github.com/pedroscherer",
    },
    {
      icon: <FaInstagram size={20} color="#fff" />,
      url: "https://www.instagram.com/_pedrosalves/",
    },
  ];

  return (
    <React.Fragment>
      <div className="header-container">
        <div className="header-content">
          <div>
            <img className="header-img" src="/avatar.png" />
          </div>

          <div>
            <h1 className="header-name">Pedro Alves</h1>
            <h2 className="header-description">
              Estagiário de desenvolvimento Full-Stack
            </h2>

            <div className="header-icons">
              {socialLinks.map((item, index) => (
                <SocialIcon key={index} icon={item.icon} url={item.url} />
              ))}
            </div>
          </div>
        </div>
        <div className="header-contact">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+5551996801223"
          >
            <button>WhatsApp</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
