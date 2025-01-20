const InterestRate = ({rate, setRate}) => {

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  return (
    <div className="interest-rate-component">
        <h2 className="interest-rate-header">Interest Rate</h2>
        <div className="interest-input-container">
            <input type="number" className="interest-rate-input" 
              name="interest-rate"
              value={rate}
              onChange={handleRateChange}
            />
            <span className="percentage">%</span>
        </div>
    </div>
  )
}

export default InterestRate
