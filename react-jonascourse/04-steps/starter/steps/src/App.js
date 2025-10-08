import { useState } from "react";
const messages = [
  "A",
  "B",
  "C"
]
export default function App() {
  //Initializig the first value with 1 
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true)
  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }
  return <div>
    {/* &times -> X */}
    <button className="closeButton" onClick={() => setIsOpen(!isOpen)}>&times;</button>
    {isOpen && (
      < div className="Steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p className="message">Step {step} : {messages[step - 1]}</p>
        <div className="buttons">
          <button
            style={{ backgroundColor: '#7950f2', color: '#fff' }}
            // onClick={() => alert("Previous")}
            onMouseEnter={() => handlePrevious()}>
            Previous
          </button>
          <button
            style={{ backgroundColor: '#7950f2', color: '#fff' }}
            // onClick={() => alert("Next")}
            onMouseEnter={() => handleNext()}>
            Next
          </button>
        </div>
      </div >
    )}

  </div >

}