import PropTypes from "prop-types"; // Import PropTypes

import styles from "./InputControl.module.css";

function InputControl(props) {
  const { label, ...inputProps } = props; // Destructure props

  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...inputProps} />
    </div>
  );
}

// Define prop types for InputControl
InputControl.propTypes = {
  label: PropTypes.string, // label should be a string
};

export default InputControl;
