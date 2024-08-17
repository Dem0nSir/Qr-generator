import React, { useState } from 'react';

function FormPage({ category, onSubmit }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderFields = () => {
    switch (category) {
      case 'Social Profile':
        return (
            <>
            <input name="username" placeholder="Username" onChange={handleChange} required />
            <input name="appName" placeholder="App Name (e.g. Twitter, Instagram)" onChange={handleChange} required />
            <input name="profileUrl" placeholder="Profile URL" onChange={handleChange} required />
          </>
        );
      case 'Personal Info':
        return (
          <>
            <input name="name" placeholder="Full Name" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="phone" placeholder="Phone" onChange={handleChange} />
          </>
        );
      case 'Bank Account':
        return (
          <>
            <input name="accountNumber" placeholder="Account Number" onChange={handleChange} />
            <input name="bankName" placeholder="Bank Name" onChange={handleChange} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{category} Information</h2>
      {renderFields()}
      <button type="submit">Generate QR Code</button>
    </form>
  );
}

export default FormPage;