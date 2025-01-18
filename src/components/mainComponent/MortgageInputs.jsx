import MortgageAmount from "./MortgageAmount"
import TermRate from "./TermRate"
import MortgageType from "./MortgageType"
const MortgageInputs = () => {
  return (
    <section className="mortgage-inputs-component">
      <MortgageAmount />
      <TermRate />
      <MortgageType />
    </section>
  )
}

export default MortgageInputs
