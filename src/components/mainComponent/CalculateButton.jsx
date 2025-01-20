import IconCalculator from "./IconCalculator";

const CalculateButton = ({onClick}) => {
  return (
    <div className="button-component">
      <button onClick={onClick} className="calculate-repayments-button" 
        name="calculate-repayments"
        >
        <IconCalculator />
        <span>Calculate Repayments</span>
      </button>
    </div>
  );
};

export default CalculateButton;