
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function QRReader() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleResult = (result, error) => {
    if (result) {
      try {
        const parsedData = JSON.parse(result.text);
        setResult(parsedData);
      } catch (e) {
        setResult({ rawData: result.text });
      }
    }
    if (error) {
      setError(error.message);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        handleScan(imageData);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleScan = (data) => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setResult(parsedData);
      } catch (e) {
        setResult({ rawData: data });
      }
    }
  };

  const renderResult = () => {
    if (!result) return null;

    if (result.rawData) {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Scanned Data</h5>
            <p className="card-text">{result.rawData}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{result.category || 'Scanned Information'}</h5>
          {Object.entries(result).map(([key, value]) => (
            <p key={key} className="card-text">
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Scan QR Code</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            className="form-control mb-3"
          />
          <QrReader
            onResult={handleResult}
            style={{ width: '100%' }}
          />
          {/* {error && <p className="text-danger mt-3">{error}</p>} */}
          {renderResult()}
        </div>
      </div>
    </div>
  );
}

export default QRReader;
