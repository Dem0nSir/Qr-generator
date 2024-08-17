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
    <div>
      <h2>Your QR Code</h2>
      <div ref={qrRef}>
        <QRCode value={qrData} size={256} />
      </div>
      <p>Scan this QR code to access your information</p>
      <div>
        <button onClick={() => downloadQR('png')}>Download PNG</button>
        <button onClick={() => downloadQR('jpeg')}>Download JPG</button>
      </div>
    </div>
  );
}

export default QRCodeGenerator;