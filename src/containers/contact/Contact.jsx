import React, { useState } from 'react';
import './contact.css';
import { CountryDropdown } from 'react-country-region-selector';




function Contact() {

 
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  // const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);
  }

  //   const contact = {
  //     _type: 'contact',
  //     name: name,
  //     email: email,
  //     message: message
  //   }

  //   client.create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  // }

  return (
    <div className='app__contact section__padding'>
      <div className='app__contact-context'>
        <h1 className='gradient__text'>Have questions?</h1>
        <p>Solving problems is what we live for. Reach out - even if you’re not sure what your next step is. You’ll hear back from an expert today.</p>
      </div>
      <div className='app__contact-form'>
          <div className='app__contact-form-row'>
            <div className='app__contact-form-input'>
              <p>First Name:</p>
              <input type="text" name='firstname'  onChange={handleChangeInput} required/> 
            </div>
            <div className='app__contact-form-input'>
              <p>Last Name:</p>
              <input type="text" name='lastname'  onChange={handleChangeInput} required/> 
            </div>
          </div>
          <div className='app__contact-form-row'>
              <div className='app__contact-form-input'>
                <p>Email:</p>
                <input type="email" name='email'  onChange={handleChangeInput} required/> 
              </div>
              <div className='app__contact-form-input'>
                <p>Phone Number:</p>
                <input 
                  type="text" 
                  name="phone"
                  onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                      }
                  }} required/>
                 
              </div>
          </div>
          <div className='app__contact-form-row'>            
            <div className='app__contact-form-input'>
              <p>Company:</p>
              <input type="text" name='company'  onChange={handleChangeInput} required/>
            </div>            
          </div>

          {/* <div className='app__contact-form-row'>           
            <div className='app__contact-form-input app__contact-form-country'>
              <p>Country:</p>
              <CountryDropdown className='countryDropdown'  required/>
            </div>
          </div> */}
                  
          <div className='app__contact-form-row'>
              
              <div className='app__contact-form-input'>
                <p>Please tell us how we can help you:</p>
                <textarea 
                  name='message'
                  onChange={handleChangeInput}
                  rows={5}
                  cols={5}
                  required/>
              </div>
          </div>
          <div className='app__contact-form-row'>
            <div className='app__contact-form-input'>
              <button type="submit">Submit</button>
            </div>
            
          </div>
          
          
      </div>

    </div>
 
    
  )
}

export default Contact