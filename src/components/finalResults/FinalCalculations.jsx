import MonthlyRepayment from "./MonthlyRepayment"
import TotalRepayment from "./TotalRepayment"
const FinalCalculations = ({amount, term, rate, morgType}) => {

  const calculateResults = () => {
    const principal = Number(amount);
    const annualInterestRate = Number(rate) / 100; 
    const monthlyInterestRate = annualInterestRate / 12;
    const totalPayments = term * 12; 
  
    if (!principal || !annualInterestRate || !term) {
      return {
        monthlyRepayment: "0",
        totalRepayment: "0",
      };
    }
  
    let monthlyRepayment = 0;
    let totalRepayment = 0;
  
    if (morgType === "Repayment") {
      
      const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
      if (denominator === 0) {
        return {
          monthlyRepayment: "0",
          totalRepayment: "0",
        };
      }
  
      monthlyRepayment =
        (principal *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, totalPayments)) /
        denominator;
  
      totalRepayment = monthlyRepayment * totalPayments;
    } else if (morgType === "Interest Only") {
      monthlyRepayment = principal * monthlyInterestRate;
      totalRepayment = monthlyRepayment * totalPayments + principal;
    }
  
    return {
      monthlyRepayment: isFinite(monthlyRepayment)
        ? monthlyRepayment.toFixed(2)
        : "Invalid input",
      totalRepayment: isFinite(totalRepayment)
        ? totalRepayment.toFixed(2)
        : "Invalid input",
    };
  };
  

  const { monthlyRepayment, totalRepayment} = calculateResults();

  return (
    <div className="final-calculations-component">
      <MonthlyRepayment monthlyRepayment={monthlyRepayment}/>
      <TotalRepayment totalRepayment={totalRepayment}/>
    </div>
  )
}

export default FinalCalculations
