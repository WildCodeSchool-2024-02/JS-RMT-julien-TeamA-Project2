import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const contactForm = useRef();

const validation = () => {
  const tempErrors = {};
  if (!name) tempErrors.name = "A name is required";
  if (!email) {
    tempErrors.email = "An email is required"; 
  } else if (!/\S+@\S+\S+/.test(email)) {
    tempErrors.email = "Invalid email address";
  }
  if (category === "") {
    tempErrors.category = "Please choose an option";
  } else if (category === "mistakeMovie" && !page) {
    tempErrors.page = "Help us to find the mistake faster"
  }
  if (message.length < 60) tempErrors.message = "Your message should be at least 60 characters long";
  return tempErrors;
}

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validation();
    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm("service_it7e70d", "template_k6t4o8x", contactForm.current, {
          publicKey: "HL6pDegxlrhASDrSs",
        })
        .then(
          () => {
            setName("");
            setEmail("");
            setCategory("");
            setPage("");
            setMessage("");
            setStatus("success");
          },
          () => {
            setStatus("error");
          }
        );
    } else {
      setErrors(formErrors);
    }
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handlePage = (event) => {
    setPage(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="ContactContainer">
      <h2>Contact Us</h2>
      <p> We're sorry you encounter a problem. Please as detail as possible, we'll correct it as soon as possible </p>
      <form ref={contactForm} action={handleSubmit}>
        <label htmlFor="email">Name</label>
        <input
          className="formEntry"
          required
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />
        {errors.name && <p>{errors.name}</p>}
        <label htmlFor="email">Email</label>
        <input
          className="formEntry"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="category"> Select a reason </label>
        <select
          className="formEntry"
          name="category"
          id="category"
          onChange={handleCategory}
        >
          <option value="">-- Please choose an option --</option>
          <option value="missingMovie">I can't find one movie</option>
          <option value="mistakeMovie">I found a mistake about one movie</option>
          <option value="other">I encounter another problem</option>
        </select>
        {errors.category && <p>{errors.category}</p>}
        {category === "mistakeMovie" && (
          <>
            <label htmlFor="page">Concerned page</label>
            <input
              className="formEntry"
              type="text"
              name="page"
              id="page"
              value={page}
              onChange={handlePage}
            />
            {errors.page && <p>{errors.page}</p>}
          </>
        )}
        <label htmlFor="message">Message</label>
        <textarea
          className="formEntry"
          name="message"
          id="message"
          value={message}
          onChange={handleMessage}
        />
        {errors.message && <p>{errors.message}</p>}
        <button type="submit" onClick={handleSubmit}>Send</button>
      </form>
      {status === "success" && (
        <p className="successMessage">Your message has been sent successfully!</p>
      )}
      {status === "error" && (
        <p className="errorMessage">An error has occurred. Please try again later.</p>
      )}
    </div>
  );
}

export default ContactForm;
