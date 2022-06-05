import React from 'react'
import './Contactus.css'
import { useNavigate } from 'react-router-dom';
function Contactus() {
  let navigate = useNavigate();
  const home = () =>{navigate("/")};
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
}

export default Contactus
