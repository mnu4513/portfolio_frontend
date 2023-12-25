
import React, { useState } from 'react';
import './ContectMe.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic for handling form submission, such as sending an email or saving to a database
    console.log('Form submitted:', formData);

    const response = await fetch('http://localhost:3001/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // You may need to include additional headers, such as authentication tokens
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!data.status) {
      window.alert(data.message);
    } else {
      window.alert("Thanks for contect to me, I will revert back to you as soon as possible");
    };
  
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
