import IconCalculator from "./IconCalculator";

const CalculateButton = () => {
  return (
    <div className="button-component">
      <button className="calculate-repayments-button" name="calculate-repayments">
        <IconCalculator />
        <span>Calculate Repayments</span>
      </button>
    </div>
  );
};

export default CalculateButton;