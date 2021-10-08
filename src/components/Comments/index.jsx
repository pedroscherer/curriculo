import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { FaQuoteLeft } from 'react-icons/fa';

import './index.css';

export default function Comments() {
  const [comments, setComments] = useState();
  const [text, setText] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    api
      .get("/comentarios")
      .then((response) => setComments(response.data))
      .catch((err) => {
        console.error("Error:" + err);
      });
  }, []);

  const insertComment = () => {
    if (text !== "" && name !== "") {
      api
        .post("/comentarios/novo", {
          name,
          text,
          createDate: new Date(),
        })
        .then((response) => {
          setText("");
          setName("");
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }
  };

  return (
    <React.Fragment>
      <div className="comments-container">
        <div className="comment-new">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Comentário"
          />

          <div className="button-content">
            <button onClick={insertComment}>Enviar</button>
          </div>
        </div>

        {comments &&
          comments.length > 0 &&
          comments.map((comment, index) => (
            <div key={index}>
              <div className="comment-item">
                <FaQuoteLeft size={18} color="#9fdeb7" />
                {comment.text}
              </div>
              <div className="comment-author">
                <span className="comment-author-name">{comment.name}</span>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}
