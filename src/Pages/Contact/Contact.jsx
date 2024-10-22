import { Link } from 'react-router-dom';

import('./Contact.scss')
function Contact() {
  
  return (
    <div className="contact">
      <div className="text-content">
        <h1 className="title">GET IN TOUCH</h1>
        <p className='description'>We're here for you and we're wearing our thinking caps</p>
      </div>
      <div className="input-block">
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <input className='message' type="text" placeholder='Message...' />
      </div>
      <Link className='button-link'>
        <div className="button-block">SEND NOW!</div>
      </Link>
    </div>
  );
}

export default Contact;