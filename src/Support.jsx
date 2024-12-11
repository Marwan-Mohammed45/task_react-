import React from 'react';
import './App.css'; // Ensure there is a CSS file with this name

const Support = () => {
  const faqs = [
    {
      question: 'How can I reset my password?',
      answer: 'You can reset your password by clicking on "Forgot Password" on the login page and following the instructions.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact support by filling out the form below or by sending an email to support@example.com.',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="support-container">
      <h1>Support</h1>
      <p>If you are experiencing any issues, feel free to contact us or check out the FAQs below:</p>

      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>

      <button className="support-button">Contact Support</button>
    </div>
  );
};

export default Support;
