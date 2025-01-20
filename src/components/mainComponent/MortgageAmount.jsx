const MortgageAmount = ({amount, setAmount}) => {

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="mortgage-amount-component">
        <h2 className="mortgage-amount-header">Mortgage Amount</h2>
        <div className="currency-input">
          <span className="currency-symbol">£</span>
          <input type="number" className="mortgage-amount-input" 
            name="mortgage-amount"
            value={amount}
            onChange={handleInputChange}  
          />
        </div>
    </div>
  )
}

export default MortgageAmount
