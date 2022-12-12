import React from 'react'
// import { send } from 'emailjs-com';
import { useState } from 'react';
import Row from 'react-bootstrap/esm/Row'
export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    from_phone: '',
    from_email: '',
    message: '',
  });
  
  // todo edit UID!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //     send('default_service', 'template_w8tczab', toSend, 'd5RVtZiMEsZJiPvN_')
  //     .then(function(response) {
  //       alert("הטופס נשלח בהצלחה!");
  //       document.getElementById("contactForm").reset();
  //       console.log('SUCCESS!', response.status, response.text);
  //     }, function(error) {
  //       alert("אירעה שגיאה בלתי צפויה, נסה שוב מאוחר יותר")
  //       console.log('FAILED...', error);
  //     })
  // };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className='aboutCont'>
      <Row >
        <h4 className='center'>Contact Us</h4>
      </Row>
      <form  id="">
          <Row >
            <input required onChange={handleChange} maxLength={15} className='formItem smallFont' type="text" placeholder='Name' name="from_name" />
          </Row>
          <Row >
            <input required onChange={handleChange} minLength={10} maxLength={10} className='formItem smallFont' type="text" pattern="[0-9]{10}" placeholder='Phone Number' name="from_phone" />
          </Row>
          <Row >
            <input required onChange={handleChange} maxLength={40} className='formItem smallFont' type="text" placeholder='Mail' name="from_email" />
          </Row>
          <Row >
            <textarea required onChange={handleChange} className='text-flow rowWidth formItem smallFont' type="text" placeholder='Message' name="message"/>
          </Row>
          <Row >
            <input required className='submitBtn formItem smallFont' type="submit" value="Send"/>
          </Row>
      </form>
  </div>
  )
}
