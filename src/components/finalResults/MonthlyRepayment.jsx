const MonthlyRepayment = ({monthlyRepayment}) => {
  return (
    <div className="monthly-repayments">
      <h1 className="monthly-repayments-title">
        Your monthly repayments
      </h1>
      <p className="monthly-amount">
        £<span className="amount">{monthlyRepayment}</span>
      </p>
      <hr className="divider"/>
    </div>
  )
}

export default MonthlyRepayment
