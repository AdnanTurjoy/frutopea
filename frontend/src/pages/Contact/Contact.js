import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Get 24/7 Support</p>
                <h1>Contact us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT FORM */}
      <div className="contact-from-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="form-title">
                <h2>Have you any question?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo
                  alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore,
                  esse natus!
                </p>
              </div>
              <div id="form_status"></div>
              <div className="contact-form">
                <form id="fruitkha-contact">
                  <p>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                    />
                  </p>
                  <p>
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      id="subject"
                    />
                  </p>
                  <p>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Message"
                    ></textarea>
                  </p>
                  <input type="hidden" name="token" value="FsWga4&@f6aw" />
                  <p>
                    <input type="submit" value="Submit" />
                  </p>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-map"></i> Shop Address
                  </h4>
                  <p>
                    34/8, East Hukupara <br /> Gifirtok, Sadan. <br /> Country
                    Name
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="far fa-clock"></i> Shop Hours
                  </h4>
                  <p>
                    MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM{" "}
                  </p>
                </div>
                <div className="contact-form-box">
                  <h4>
                    <i className="fas fa-address-book"></i> Contact
                  </h4>
                  <p>
                    Phone: +00 111 222 3333 <br /> Email: support@fruitkha.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* find our location  */}
      <div className="find-location blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>
                {" "}
                <i className="fas fa-map-marker-alt"></i> Find Our Location
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* google map section  */}
      <div className="embed-responsive embed-responsive-21by9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d915.4675584861387!2d89.95758736752167!3d23.392911273365755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skhan%20villa!5e0!3m2!1sen!2sbd!4v1672943317894!5m2!1sen!2sbd"
          width="600"
          height="450"
          style="border:0;"
          allowFullScreen=""
          loading="lazy"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: "0" }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
