import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/ContactForm.css";

function ContactForm() {
  const [category, setCategory] = useState("")
  const [page, setPage] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const contactForm = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm('service_it7e70d', 'template_k6t4o8x', contactForm.current, {
        publicKey: 'HL6pDegxlrhASDrSs'
      })
      .then(
        () => {
          setStatus("success");
          setCategory("")
          setEmail("")
          setMessage("")
          setPage("")
        },
        () => {
          setStatus("error")
        }
      )
  }
  const handleCategory = (event) => {
    setCategory (event.target.value);
  }
  const handlePage = (event) => {
    setPage (event.target.value);
  }
  const handleEmail = (event) => {
    setEmail (event.target.value);
  }
  const handleName = (event) => {
    setName (event.target.value);
  }
  const handleMessage = (event) => {
    setMessage (event.target.value);
  }

  return (
    <div className="ContactContainer">
      <h2>Contact Us</h2>
      <p>We're sorry you encounter a problem. Please as detail as possible, we'll correct it as soon as possible</p>
      <form ref={contactForm} action={handleSubmit}>
        <label htmlFor="email">Name</label>
        <input className="formEntry" required type="text" name="name" id="name" value={name} onChange={handleName}/>
        <label htmlFor="email">Email</label>
        <input className="formEntry" required type="email" name="email" id="email" value={email} onChange={handleEmail}/>
        <label htmlFor="category"> Select a reason </label>
        <select className="formEntry" name="category" id="category" onChange={handleCategory}>
          <option value={category}>-- Please choose an option --</option>
          <option value="missingMovie"> I can't find one movie</option>
          <option value="mistakeMovie"> I found a mistake about one movie</option>
          <option value="other"> I encounter another problem</option>
        </select>
        {category === "mistakeMovie" && <>
          <label htmlFor="page">Concerned page</label>
          <input className="formEntry" type="text" name="page" id="page" value={page} onChange={handlePage}/>
        </>}
        <label htmlFor="message">Message</label>
        <textarea className="formEntry" required name="message" id="message" value={message} onChange={handleMessage}/>
        <button type="submit" onClick={handleSubmit}>Send</button>
      </form>
      {status === "success" && <p className="successMessage">Your message has been sent successfully!</p>}
      {status === "error" && <p className="errorMessage">An error has occurred. Please try again later.</p>}
    </div>
  )
}

export default ContactForm;