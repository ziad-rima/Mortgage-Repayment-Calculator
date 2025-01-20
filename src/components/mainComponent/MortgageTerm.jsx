const MortgageTerm = ({term, setTerm}) => {

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="mortgage-term-component">
        <h2 className="mortgage-term-header">Mortgage Term</h2>
        <div className="mortgage-input-container">
            <input type="number" className="mortgage-term-input" 
              name="mortgage-term"
              value={term}
              onChange={handleTermChange}
            />
            <span className="years">years</span>
        </div>
    </div>
  )
}

export default MortgageTerm
