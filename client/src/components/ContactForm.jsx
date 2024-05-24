function ContactForm() {
  return (
    <>
      <p>We're sorry you encounter a problem. Please as detail as possible, we'll correct it as soon as possible</p>
      <form action="">
        <label htmlFor="reason"> Select a reason </label>
        <select name="reason" id="reason">
          <option value="">-- Please choose an option --</option>
          <option value="missingMovie"> I can't find one movie</option>
          <option value="mistakeMovie"> I found a mistake about one movie</option>
          <option value="other"> I encounter another problem</option>
        </select>
        <label htmlFor="page">Enter the URL adresse of the concerned page</label>
        <input type="text" name="page" id="page" />
        <label htmlFor="email">Enter your email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Enter your message</label>
        <textarea name="message" id="message"/>
        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default ContactForm;