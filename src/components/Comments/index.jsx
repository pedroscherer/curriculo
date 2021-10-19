import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { FaQuoteLeft } from "react-icons/fa";

import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { insertComment, startComments } from "../../store/modules/comments";

export default function Comments() {
  const initialComment = {
    text: "",
    name: "",
    validations: {
      text: true,
      name: true,
    },
  };

  const comments = useSelector((state) => state.comments);
  const [comment, setComment] = useState(initialComment);

  const dispatch = useDispatch();

  const validate = () => {
    const isValidText = comment.text.length > 0;
    const isValidName = comment.name.length > 0;

    setComment((prevState) => ({
      ...prevState,
      validations: {
        text: isValidText,
        name: isValidName,
      },
    }));

    return isValidText && isValidName;
  };

  const onChange = (field, value) => {
    setComment((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  useEffect(() => {
    api
      .get("/comentarios")
      .then((response) => dispatch(startComments(response.data)))
      .catch((err) => {
        console.error("Error:" + err);
      });
  }, [dispatch]);

  const insertNewComment = () => {
    const { name, text } = comment;
    const isValid = validate();

    if (isValid) {
      const payload = {
        name,
        text,
        createDate: new Date(),
      };

      api
        .post("/comentarios/novo", payload)
        .then(() => {
          setComment(initialComment);
          dispatch(
            insertComment({
              name,
              text,
            })
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <React.Fragment>
      <div className="comments-container">
        <div className="comment-new">
          <input
            type="text"
            value={comment.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder={
              !comment.validations.name ? "Preencha o nome" : "Nome *"
            }
            className={!comment.validations.name ? "invalid" : ""}
            onBlur={validate}
          />
          <textarea
            value={comment.text}
            onChange={(e) => onChange("text", e.target.value)}
            placeholder={
              !comment.validations.name
                ? "Preencha o comentário"
                : "Comentário *"
            }
            className={!comment.validations.text ? "invalid" : ""}
            onBlur={validate}
          />

          <div className="button-content">
            <button onClick={insertNewComment}>Enviar</button>
          </div>
        </div>

        {comments &&
          comments.length > 0 &&
          comments.map((comment, index) => (
            <div className="comment-item" key={index}>
              <div>
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
