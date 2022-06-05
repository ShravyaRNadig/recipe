import React from 'react'
import './styleSheets/Contactus.css'
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  let navigate = useNavigate();
  const home = () => {
    alert('Thank you for contacting us. We will get back to you soon.')
    navigate("/home", { replace: true });
  };

  const handleAuthRedirect = () => {
    window.location.href='/'
  }
  if (sessionStorage.getItem("auth") === 'Authenticated') {
    return (
      <form
        // method='POST'
        name='contactform'
        className='contactForm'>

        <input
          type='text'
          name='name'
          placeholder='Enter your name' required />

        <input
          type='email'
          name='email'
          placeholder='Enter your email' required />

        <textarea
          name='message'
          placeholder='Messaage' required></textarea>

        <button type='submit' onClick={home}>Submit</button>
        {/* <button type='submit' onSubmit={home}>Submit</button> */}
        {/* <button type='submit'>Submit</button> */}

      </form>
    )
  } else {
    return (
      <div>
        <h1>You are not authorized to view this page</h1>
        <h2>Please login to view this page</h2>
        <button onClick={handleAuthRedirect}>Login/Signup</button>
      </div>
    )
  }
}

export default ContactUs
