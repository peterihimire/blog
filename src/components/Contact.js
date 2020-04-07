import React from 'react';
import Title from '../components/Title';
import { FaPaperPlane, FaEnvelope, FaPhone, FaUserCircle } from 'react-icons/fa';

const contact = () => {
  return (
    <section className='contact'>
      <div className='contact-center'>
        <Title title1='contact' title2='me' subtitle='Tell me about the project...' />
        <div className='contact-card'>
          <form className='contact-form'>
            <div className="contact-header">
              <div className='contact-header-content'>
                <h2>PETER IHIMIRE</h2>
                <p><FaEnvelope /> peterihimire@gmail.com</p>
                <p><FaPhone /> +234-8060-95-8134</p>
              </div>
            </div>
            <div className='contact-input'>
              <div className='img' />
              <div className='form-group'>
                <label htmlFor='name'>name</label><br/>
                <input 
                  type='text'
                  placeholder='Enter name'
                  name='name' 
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>email</label><br/>
                <input 
                  type='email'
                  placeholder='Enter email'
                  name='email' 
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>message</label><br/>
                <textarea 
                  type='email'
                  placeholder='Enter massage'
                  name='message' 
                />
              </div>
              <button 
                className="contact-btn "
                type="submit"
                >
                  <FaPaperPlane /> LET'S GET STARTED
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default contact;
