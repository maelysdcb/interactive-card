export default function Validation({ inputValue }) {
  const cardNumberPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const currentYear = new Date().getFullYear();
  const errors = {
    firstName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  };

  const checkProp = (prop, errorMessage, test) => {
    if (inputValue[prop]) {
      if (!test(inputValue[prop])) {
        errors[prop] = errorMessage;
      } else {
        errors[prop] = "Valid";
      }
    } else {
      errors[prop] = `Required`;
    }
  };

  checkProp("firstName", "Enter a valid name", (value) => value.length < 25);
  checkProp("cardNumber", "Enter a valid card", (value) =>
    cardNumberPattern.test(value)
  );
  checkProp(
    "month",
    "Enter a valid month",
    (value) => value >= 1 && value <= 12
  );
  checkProp("year", "Enter a valid year", (value) => value >= currentYear && value < currentYear + 3);
  checkProp("cvv", "Enter a valid cvv", (value) => value.length === 3);

  return errors;
}
