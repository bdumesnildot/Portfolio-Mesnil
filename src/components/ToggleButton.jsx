import "/src/styles/components-styles/ToggleButton.scss";

function ToggleButton({ isFrench, setIsFrench }) {
  return (
    <label className="toggle">
      <input
        type="checkbox"
        className="toggle-checkbox"
        checked={!isFrench}
        onChange={() => setIsFrench(!isFrench)}
      />
      <span className="toggle-switch" />
      <span className="toggle-label">
        {isFrench ? "FR" : "EN"}
      </span>
    </label>
  );
}

export default ToggleButton;
