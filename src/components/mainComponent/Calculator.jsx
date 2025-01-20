import Header from "./Header"
import MortgageInputs from "./MortgageInputs"
import CalculateButton from "./CalculateButton"
const Calculator = ({amount, setAmount, term, setTerm, rate, setRate, morgType, setMorgType, setShowResults, clearAll, setClearAll}) => {
  
  const handleCalculate = () => {
    if (!amount || !term || !rate || !morgType) {
      alert("Please fill all the inputs")
    } else {
      setShowResults(true);
    }
  }

  return (
    <div className="calculator-component">
      <Header clearAll={clearAll} setClearAll={setClearAll}/>
      <MortgageInputs 
        amount={amount} setAmount={setAmount}
        term={term} setTerm={setTerm}
        rate={rate} setRate={setRate}
        morgType={morgType} setMorgType={setMorgType}
      />
      <CalculateButton onClick={handleCalculate}/>
    </div>
  )
}

export default Calculator
