const TotalRepayment = ({totalRepayment}) => {
  return (
    <div className="total-repayments">
      <h1 className="total-repayments-title">
        Total you'll repay over the term
      </h1>
      <p className="total-repayment">
        £<span className="total-amount">{totalRepayment}</span>
      </p>
    </div>
  )
}

export default TotalRepayment
