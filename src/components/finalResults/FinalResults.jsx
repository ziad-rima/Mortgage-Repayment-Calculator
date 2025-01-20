import FinalHeader from "./FinalHeader"
import FinalCalculations from "./FinalCalculations"
const FinalResults = ({amount, term, rate, morgType}) => {
  return (
    <div className="final-results-component">
      <FinalHeader />
      <FinalCalculations 
        amount={amount}
        term={term}
        rate={rate}
        morgType={morgType}
      />
    </div>
  )
}

export default FinalResults
