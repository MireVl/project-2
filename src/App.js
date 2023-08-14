import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step <= 1) return;

    setStep((step) => step - 1);
  };

  const handleNext = () => {
    if (step >= messages.length) return;

    setStep((step) => step + 1);
  };

  const handleVisibility = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <button className="close" onClick={handleVisibility}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

const StepMessage = ({ step, children }) => {
  return (
    <p className="message">
      <h3>Step {step}:</h3>
      {children}
    </p>
  );
};

const Button = ({ textColor, bgColor, onClick, children }) => {
  console.log(children);
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default App;
