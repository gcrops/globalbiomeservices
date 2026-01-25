import { useState } from 'react';
import './ContactUs.css';
export function ContactUs() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleGmailOpen = () => {
    const subject = `Contact from ${name}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@globalbiomeservices.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(gmailUrl);
  };

  return (
    <div>
      <div className="MainHeroContactus">
        <div className="heroTextContactus">Contact Us</div>
      </div>
      <div className="contactsplit">
        <div className="getintouch">
          <h1>Get In Touch</h1>

          <h3>
            Any question? Reach out to us and we’ll get back to you shortly.
          </h3>
          <div className="container">
            <form action="">
              <label>Your Name*</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <label>Your Message</label>
              <textarea
                id="subject"
                name="subject"
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></textarea>
              <button className="email-button" onClick={handleGmailOpen}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="officeaddress">
          <h1>USA Office</h1>
          <div>Global Biomeservices LLC</div>
          <div className="customblue">
            Global Biome Services
            <div>500 College Road E,</div>
            <div>Suite 201, Princeton NJ 08540.</div>
            Email: info@globalbiomeservices.com
          </div>
        </div>
      </div>
    </div>
  );
}
