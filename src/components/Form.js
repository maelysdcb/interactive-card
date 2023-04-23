import { useState } from "react";
import "../styles/Form.css";
import Validation from "./Validation";

export default function Form({ inputValue, setInputValue }) {
  // Fetch errors
  const [errors, setErrors] = useState({});

  // Input value
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };

  // Form validation
  const handleValidation = (e) => {
    e.preventDefault();
    setErrors(Validation({ inputValue: inputValue }));
  };

  return (
    <form action="" method="POST" onSubmit={handleValidation}>
      <div className="form-info">
        <label htmlFor="">CARDHOLDER NAME</label>
        <input
          type="text"
          name="firstName"
          placeholder="e.g. Jane Appleseed"
          value={inputValue.firstName}
          onChange={handleInputChange}
          className={errors.firstName === "Required" ? "error" : "valid"}
        />
        {
          <span className={errors.firstName === "Required" ? "error" : "valid"}>
            {Object.values(errors)[0]}
          </span>
        }
      </div>
      <div className="form-info">
        <label htmlFor="">CARD NUMBER</label>
        <input
          type="number"
          name="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          value={inputValue.cardNumber}
          onChange={handleInputChange}
          className={errors.cardNumber === "Required" ? "error" : "valid"}
        />
        <span className={errors.cardNumber === "Required" ? "error" : "valid"}>
          {Object.values(errors)[1]}
        </span>
      </div>
      <div className="form-date-exp">
        <div className="form-mm-yy">
          <label htmlFor="">EXP. DATE (MM/YY)</label>
          <div className="form-mm-yy-input">
            <div className="form-m">
              <input
                type="number"
                name="month"
                placeholder="MM"
                value={inputValue.month}
                onChange={handleInputChange}
                className={errors.month === "Required" ? "error" : "valid"}
              />
              <span className={errors.month === "Required" ? "error" : "valid"}>
                {Object.values(errors)[2]}
              </span>
            </div>
            <div className="form-y">
              <input
                type="number"
                name="year"
                placeholder="YY"
                value={inputValue.year}
                onChange={handleInputChange}
                className={errors.year === "Required" ? "error" : "valid"}
              />
              <span className={errors.year === "Required" ? "error" : "valid"}>
                {Object.values(errors)[3]}
              </span>
            </div>
          </div>
        </div>
        <div className="form-cvv">
          <label htmlFor="">CVV</label>
          <input
            type="number"
            name="cvv"
            placeholder="e.g. 123"
            value={inputValue.cvv}
            onChange={handleInputChange}
            className={
              errors.cvv === ""
                ? ""
                : errors.cvv === "Valid"
                ? "valid"
                : "error"
            }
          />
          <span className={errors.cvv === "Valid" ? "valid" : "error"}>
            {Object.values(errors)[4]}
          </span>
        </div>
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
}
