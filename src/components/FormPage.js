import React, { useState } from 'react';

function FormPage({ category, onSubmit }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, category });
  };

  const renderFields = () => {
    switch (category) {
      case 'Social Profile':
        return (
          <>
            <div className="mb-3">
              <input name="username" className="form-control" placeholder="Username" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input name="appName" className="form-control" placeholder="App Name (e.g. Twitter, Instagram)" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input name="profileUrl" className="form-control" placeholder="Profile URL" onChange={handleChange} required />
            </div>
          </>
        );
      case 'Personal Info':
        return (
          <>
            <div className="mb-3">
              <input name="name" className="form-control" placeholder="Full Name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input name="email" className="form-control" placeholder="Email" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input name="phone" className="form-control" placeholder="Phone" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input name="address" className="form-control" placeholder="Address" onChange={handleChange} required />
            </div>
          </>
        );
      case 'Bank Account':
        return (
          <>
            <div className="mb-3">
              <input name="accountHolder" className="form-control" placeholder="Account Holder Name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input name="accountNumber" className="form-control" placeholder="Account Number" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input name="bankName" className="form-control" placeholder="Bank Name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input name="branchCode" className="form-control" placeholder="Branch Code" onChange={handleChange} required />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4 text-center">{category} Information</h2>
      {renderFields()}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary btn-lg">Generate QR Code</button>
      </div>
    </form>
  );
}

export default FormPage;