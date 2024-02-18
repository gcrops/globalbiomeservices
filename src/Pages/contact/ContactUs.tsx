import './ContactUs.css';
export function ContactUs() {
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
              />
              <label>Email*</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Email"
              ></input>
              <label>Your Message</label>
              <textarea id="subject" name="subject"></textarea>
              <input type="submit" value="Submit" id="submit"></input>
            </form>
          </div>
        </div>
        <div className="officeaddress">
          <h1>USA Office</h1>
          <div>Global Biomeservices LLC</div>
          <div className="customblue">
            81 Big Oak Road, STE # 134
            <div>Morrisville, PA 19067 </div>
            <div>Phone: (267) 317 4806</div>
            Email: info@globalbiomeservices.com
          </div>
          <h1>India Office</h1>
          <div>
            <div>SEQATO SOFTWARE SOLUTIONS PVT. LTD. </div>
            <div className="customblue">
              <div>Level 1, Nila Buliding, Technopark, Trivandrum.</div>
              <div>Kerala, India – 695581 </div>
              <div>Email: info@seqato.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
