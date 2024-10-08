import React from 'react';
import QRReader from './QRReader';

function Welcome({ onContinue }) {
  return (
    <div className="text-center">
    <h1 className="mb-4">Welcome to QR Code Generator</h1>
    <p className="lead mb-4">Generate QR codes for your personal information</p>
    <button className="btn btn-primary btn-lg" onClick={onContinue}>Get Started</button>

    <QRReader/>
  </div>
  );
}

export default Welcome;