/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

const ContactModal = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = {
      email,
      subject,
      message
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({formData})
    })

    response.status === 200 ? setShowSuccess(true) : setShowError(true)
  }

  function handleSuccessClick (e) {
    e.preventDefault()
    setShowSuccess(false)
    setEmail('')
    setSubject('')
    setMessage('')
    document.getElementById('contact_dialog').close()
  }

  function handleErrorClick (e) {
    e.preventDefault()
    setShowError(false)
    setEmail('')
    setSubject('')
    setMessage('')
    document.getElementById('contact_dialog').close()
  }

  function handleClose (e) {
    e.preventDefault()
    document.getElementById('contact_dialog').close()
  }

  return (
    <dialog className="contact-dialog" id="contact_dialog">
      <div className="form-container">
        <img src="/images/close.png" alt="close" className="contact-dialog-close" onClick={handleClose}/>
        <form onSubmit={handleSubmit} method="POST" className="contact-form" id="contact_form">
          <h1><span>Put Me To Work</span></h1>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              required
              id='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='email'
            />
          </div>
          <div>
            <label htmlFor='subject'>Subject</label>
            <input
              required
              id='subject'
              name='subject'
              value={subject}
              onChange={e => setSubject(e.target.value)}
              type='text'
            />
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea
              required
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
              id='message'
              rows={8}
            />
          </div>
          <button type='submit' disabled={isLoading}>Send</button>
        </form>
        {showSuccess &&
          <div className="success-message">
            <p className="">Your request has been sent</p>
            <button onClick={handleSuccessClick}>Ok, Thanks!</button>
          </div>
        }
        {showError &&
          <div className="error-message">
            <p className="">Sorry, something went wrong!</p>
            <button onClick={handleErrorClick}>Ok, I&apos;ll try later.</button>
          </div>
        }
      </div>
    </dialog>
  );
};

export default ContactModal;
