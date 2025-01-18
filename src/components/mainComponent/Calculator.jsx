import Header from "./Header"
import MortgageInputs from "./MortgageInputs"
import CalculateButton from "./CalculateButton"
const Calculator = () => {
  return (
    <div className="calculator-component">
      <Header />
      <MortgageInputs />
      <CalculateButton />
    </div>
  )
}

export default Calculator
