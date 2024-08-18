import React, { useState } from 'react';
import Welcome from './components/Welcome';
import CategorySelection from './components/CategorySelection';
import FormPage from './components/FormPage';
import QRCodeGenerator from './components/QRCodeGenerator';
import QRReader from './components/QRReader';

function App() {
  const [page, setPage] = useState('welcome');
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState(null);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setPage('form');
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    setPage('qr');
  };

  const renderPage = () => {
    switch (page) {
      case 'welcome':
        return <Welcome onContinue={() => setPage('category')} onScanQR={() => setPage('reader')} />;
      case 'category':
        return <CategorySelection onSelect={handleCategorySelect} />;
      case 'form':
        return <FormPage category={category} onSubmit={handleFormSubmit} />;
      case 'qr':
        return <QRCodeGenerator data={formData} />;
      case 'reader':
        return <QRReader />;
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {renderPage()}
          {page !== 'welcome' && (
            <button className="btn btn-secondary mt-3" onClick={() => setPage('welcome')}>
              Back to Home
            </button>
          )}
  
        </div>
      </div>
    </div>
  );
}

export default App;