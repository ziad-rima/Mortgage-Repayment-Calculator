const MortgageAmount = () => {
  return (
    <div className="mortgage-amount-component">
        <h2 className="mortgage-amount-header">Mortgage Amount</h2>
        <div className="currency-input">
          <span className="currency-symbol">£</span>
          <input type="number" className="mortgage-amount-input" name="mortgage-amount"/>
        </div>
    </div>
  )
}

export default MortgageAmount
