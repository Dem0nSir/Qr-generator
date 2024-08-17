import React from 'react';

function Welcome({ onContinue }) {
  return (
    <div>
      <h1>Welcome to QR Code Generator</h1>
      <p>Generate QR codes for your personal information</p>
      <button onClick={onContinue}>Get Started</button>
    </div>
  );
}

export default Welcome;