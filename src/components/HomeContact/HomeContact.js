import axios from "axios";
import { useState } from "react";
import "./HomeContact.scss";

const HomeContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !body) {
      alert("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/send-email`,
        {
          name,
          email,
          body,
        }
      );
      console.log(response.data.success);
      alert("Email sent successfully");
    } catch (error) {
      console.error(`Failed to send email: ${error}`);
    }
  };

  return (
    <section className="home-contact" id="contact">
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
            <button className="home-contact__button link">Hire Me</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default HomeContact;
