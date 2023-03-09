import React, { useState } from "react";
import axios from "axios";
import "./HomeContact.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !body) {
      alert("Please fill in all fields");
      return;
    }
    try {
      setSending(true);
      await axios.post(`${process.env.REACT_APP_API_URL}/send-email`, {
        name,
        email,
        body,
      });
      toast.success("Email sent successfully!");
      setSending(false);
      // setName("");
      // setEmail("");
      // setBody("");
    } catch (error) {
      console.error(`Failed to send email: ${error}`);
      toast.error("Failed to send email");
      setSending(false);
    }
  };

  return (
    <section className="home-contact" id="contact">
      <ToastContainer />

      <article className="home-contact__container">
        <h1 className="home-contact__title">CONTACT ME</h1>
        <form onSubmit={handleSubmit} className="home-contact__form">
          <label className="home-contact__label">
            <input
              type="text"
              value={name}
              placeholder="Your name here..."
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="home-contact__input"
            />
          </label>
          <label className="home-contact__label">
            <input
              type="email"
              value={email}
              placeholder="Email I can reach you at..."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="home-contact__input"
            />
          </label>
          <label className="home-contact__label">
            <textarea
              value={body}
              placeholder="Please describe why you are reaching out to me..."
              onChange={(e) => {
                setBody(e.target.value);
              }}
              className="home-contact__textarea"
            />
          </label>
          <div className="home-contact__button-container">
            <button className="home-contact__button link" disabled={sending}>
              {sending ? "Sending..." : "Hire Me"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default HomeContact;
