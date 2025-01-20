import MortgageTerm from "./MortgageTerm"
import InterestRate from "./InterestRate"
const TermRate = ({term, setTerm, rate, setRate}) => {
  return (
    <div className="term-rate-component">
      <MortgageTerm term={term} setTerm={setTerm}/>
      <InterestRate rate={rate} setRate={setRate}/>
    </div>
  )
}

export default TermRate
