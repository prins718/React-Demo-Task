import React from "react";
import "./Css/Contact.css";

function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({});
  const [successMsg, setSuccessMsg] = React.useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setSuccessMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

   
    console.log("Form submitted:", formData);

    setSuccessMsg("Your message has been sent! We’ll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        Have a question about your order or our products? Get in touch with us.
      </p>

      <div className="contact-wrapper">
       
        <div className="contact-form-card">
          <h2>Send us a message</h2>

          {successMsg && <div className="success-msg">{successMsg}</div>}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Order issue, product query, etc."
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <p className="error-text">{errors.subject}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>

       
        <div className="contact-info-card">
          <h2>Get in touch</h2>
          <p>
            For any queries related to orders, returns, or products, feel free to
            contact us using the details below.
          </p>

          <div className="info-item">
            <span className="info-label">Address</span>
            <span className="info-value">
              ElectroMart Pvt. Ltd.<br />
              2nd Floor, Tech Plaza,<br />
              Ahmedabad, Gujarat, India
            </span>
          </div>

          <div className="info-item">
            <span className="info-label">Phone</span>
            <span className="info-value">+91 98765 43210</span>
          </div>

          <div className="info-item">
            <span className="info-label"> Email</span>
            <span className="info-value">support@electromart.com</span>
          </div>

          <div className="info-item">
            <span className="info-label">Support Hours</span>
            <span className="info-value">Mon – Sat: 9:00 AM – 8:00 PM</span>
          </div>

          <div className="map-placeholder">
            <p>Store Location Map</p>
            <span>(You can embed Google Map iframe here.)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
