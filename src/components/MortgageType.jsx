const MortgageType = () => {
  return (
    <div className="mortgage-type-component">

      <h2 className="mortgage-type-header">Mortgage Type</h2>

      <div className="mortgage-type-container">

        <div className="repayment-container">
          <input type="radio" className="repayment-input" 
              id="repayment" name="radio-input" />
          <label htmlFor="repayment">Repayment</label>
        </div>

        <div className="interest-only-container">
          <input type="radio" className="interest-only-input" 
            id="interest" name="radio-input"/>
          <label htmlFor="interest">Interest Only</label>
        </div>

      </div>
      
    </div>
  )
}

export default MortgageType
