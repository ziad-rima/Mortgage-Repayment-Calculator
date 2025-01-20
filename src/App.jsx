import Calculator from "./components/mainComponent/Calculator"
import Results from "./components/emptyResults/Results"
import FinalResults from "./components/finalResults/FinalResults"
import { useState } from "react"
const App = () => {

  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [morgType, setMorgType] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [clearAll, setClearAll] = useState(false);

  const handleClearAll = () => {
    setAmount("");
    setTerm("");
    setRate("");
    setMorgType("");
    setClearAll(false);
  };

  if (clearAll) {
    handleClearAll();
  }

  return (
    <div className="main-component">
      <Calculator 
        amount={amount} setAmount={setAmount} 
        term={term} setTerm={setTerm}
        rate={rate} setRate={setRate}
        morgType={morgType} setMorgType={setMorgType}
        setShowResults={setShowResults}
        clearAll={clearAll} setClearAll={setClearAll}
      />
      {showResults ? (
        <FinalResults 
          amount={amount} term={term} rate={rate} 
          morgType={morgType}
        />    
      ) : (
        <Results />
      )}
    </div>
  )
}

export default App
