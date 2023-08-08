import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Home() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_nlm1x3f', 'template_hi3xzic', form.current, 'tqHSqObCYK-dmzwWU');
      emailjs.sendForm('service_nlm1x3f','template_qyt1m67', form.current, 'tqHSqObCYK-dmzwWU')
        .then((result) => {
            console.log(result.text);
            console.log("Massage send");
            alert("Send mail")
        }, (error) => {
            console.log(error.text);
        });
        

    };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <center>Mail Form</center>
            <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" className='form-control' name="user_name" required/>
      <label>Email</label>
      <input type="email" className='form-control' name="user_email" required/>
      <label>Message</label>
      <textarea className='form-control' name="message" />
      <input type="submit" className='form-control' value="Send" />
    </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
