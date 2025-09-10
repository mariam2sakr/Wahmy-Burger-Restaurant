import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = { name, email, message };

    fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Feedback sent:", data);
        setName("");
        setEmail("");
        setMessage("");
        alert("Feedback sent successfully!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div id="CONTACT">
      <div className="left-div">
        <h2 className="h-contact">Get in Touch</h2>
        <ul className="info-contact">
          <li>
            HotLine <i className="fa-solid fa-phone icon"></i> : 19905
          </li>
          <li>
            Email <i className="fa-solid fa-envelope icon"></i> : xxx22zzz@wahmyburger.net
          </li>
          <li>
            Facebook <i className="fa-brands fa-facebook-f icon"></i> :{" "}
            <a href="http://facebook.com/profile.php?id=61559362118791&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              Open Link
            </a>
          </li>
          <li>
            Instagram <i className="fa-brands fa-instagram icon"></i> :{" "}
            <a href="https://www.instagram.com/wahmyburgereg/" target="_blank" rel="noopener noreferrer">
              Open Link
            </a>
          </li>
          <li>
            Tiktok <i className="fa-brands fa-tiktok icon"></i> :{" "}
            <a href="http://tiktok.com/@wahmyburgeregypt" target="_blank" rel="noopener noreferrer">
              Open Link
            </a>
          </li>
        </ul>
      </div>

      <div className="right-div">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="txt">Name:</label>
            <input
              type="text"
              className="form-control"
              id="txt"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label>Your Feedback:</label>
          <textarea
            placeholder="You Have Any Feedback"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit" className="send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;