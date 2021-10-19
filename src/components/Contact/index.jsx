import React, { useState } from "react";
import api from "../../services/api";

import "./index.css";

export default function Contacts() {
  const initialContact = {
    name: "",
    email: "",
    phone: "",
    validations: {
      name: true,
      email: true,
      phone: true,
    },
  };

  const [contact, setContact] = useState(initialContact);

  const validate = () => {
    const isValidName = contact.name.length > 0;
    const isValidEmail = contact.email.length > 0;
    const isValidPhone = contact.phone.length > 0;

    setContact((prevState) => ({
      ...prevState,
      validations: {
        name: isValidName,
        email: isValidEmail,
        phone: isValidPhone,
      },
    }));

    return isValidName && isValidEmail && isValidPhone;
  };

  const onChange = (field, value) => {
    setContact((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const insertContact = () => {
    const isValid = validate();
    const { name, phone, email } = contact;

    if (isValid) {
      api
        .post("/contato/novo", {
          name,
          email,
          phone,
        })
        .then(() => {
          setContact(initialContact);
        })
        .catch((err) => {
          console.error("Error:" + err);
        });
    }
  };

  return (
    <React.Fragment>
      <div className="contact-container">
        <div className="contact-new">
          <input
            type="text"
            value={contact.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder={
              !contact.validations.name ? "Preencha o nome" : "Nome *"
            }
            className={!contact.validations.name ? "invalid" : ""}
            onBlur={validate}
          />
          <input
            type="tel"
            value={contact.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder={
              !contact.validations.phone ? "Preencha o WhatsApp" : "WhatsApp *"
            }
            className={!contact.validations.phone ? "invalid" : ""}
            onBlur={validate}
          />
          <input
            type="email"
            value={contact.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder={
              !contact.validations.email ? "Preencha o E-mail" : "E-mail *"
            }
            className={!contact.validations.email ? "invalid" : ""}
            onBlur={validate}
          />

          <div className="button-content">
            <button onClick={insertContact}>Enviar</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
