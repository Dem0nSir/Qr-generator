import { useState } from "react";
import Welcome from "./components/Welcome";
import CategorySelection from "./components/CategorySelection";
import FormPage from "./components/FormPage";
import QRCodeGenerator from "./components/QRCodeGenerator";

function App() {
  const [step, setStep] = useState("welcome");
  const [category, setCategory] = useState("");
  const [formData, setFormData] = useState(null);

  const handleContinue = () => {
    setStep("category");
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setStep("form");
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    setStep("qr");
  };

  return (
    <div className="App">
      {step === "welcome" && <Welcome onContinue={handleContinue} />}
      {step === "category" && (
        <CategorySelection onSelect={handleCategorySelect} />
      )}
      {step === "form" && (
        <FormPage category={category} onSubmit={handleFormSubmit} />
      )}
      {step === "qr" && <QRCodeGenerator data={formData} />}
    </div>
  );
}

export default App;
