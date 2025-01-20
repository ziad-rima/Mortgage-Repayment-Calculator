import MortgageAmount from "./MortgageAmount"
import TermRate from "./TermRate"
import MortgageType from "./MortgageType"
const MortgageInputs = ({amount, setAmount, term, setTerm, rate, setRate, morgType, setMorgType}) => {
  return (
    <section className="mortgage-inputs-component">
      <MortgageAmount amount={amount} setAmount={setAmount}/>
      <TermRate 
        term={term} setTerm={setTerm}
        rate={rate} setRate={setRate}
      />
      <MortgageType morgType={morgType} setMorgType={setMorgType} />
    </section>
  )
}

export default MortgageInputs
