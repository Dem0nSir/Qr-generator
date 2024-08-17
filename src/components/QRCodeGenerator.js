import React, { useRef } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator({ data }) {
  const qrRef = useRef(null);

  const downloadQR = (format) => {
    if (!qrRef.current) return;

    const canvas = qrRef.current.querySelector('canvas');
    const image = canvas.toDataURL(`image/${format}`);
    const link = document.createElement('a');
    link.href = image;
    link.download = `qrcode.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateQRData = () => {
    if (data.appName && data.profileUrl) {
      return data.profileUrl;
    } else {
      return JSON.stringify(data);
    }
  };

  const qrData = generateQRData();

  return (
    <div className="text-center">
      <h2 className="mb-4">Your QR Code</h2>
      <div ref={qrRef} className="mb-4">
        <QRCode value={qrData} size={256} />
      </div>
      <p className="mb-3">Scan this QR code to access your information</p>
      {data.appName && (
        <p className="mb-4">
          This QR code will open your {data.appName} profile for {data.username}
        </p>
      )}
      <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-primary" onClick={() => downloadQR('png')}>Download PNG</button>
        <button className="btn btn-secondary" onClick={() => downloadQR('jpeg')}>Download JPG</button>
      </div>
    </div>
  );
}

export default QRCodeGenerator;