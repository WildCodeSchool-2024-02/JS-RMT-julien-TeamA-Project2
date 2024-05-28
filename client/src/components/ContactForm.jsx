import "../assets/styles/ContactForm.css"

function ContactForm() {
  return (
    <div className="ContactContainer">
      <h2>Contact Us</h2>
      <p>We're sorry you encounter a problem. Please as detail as possible, we'll correct it as soon as possible</p>
      <form action="">
        <label htmlFor="reason"> Select a reason </label>
        <select className="formEntry" name="reason" id="reason">
          <option value="">-- Please choose an option --</option>
          <option value="missingMovie"> I can't find one movie</option>
          <option value="mistakeMovie"> I found a mistake about one movie</option>
          <option value="other"> I encounter another problem</option>
        </select>
        <label htmlFor="page">Concerned page</label>
        <input className="formEntry" type="text" name="page" id="page" />
        <label htmlFor="email">Email</label>
        <input className="formEntry" type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea className="formEntry" name="message" id="message"/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactForm;