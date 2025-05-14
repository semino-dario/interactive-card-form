import { useState } from "react";
import { isNumeric } from "../lib/utils";

export const useValidateInputs = () => {
  const [error, setError] = useState({});

  const validateInputs = (obj) => {
    let isValid = true;

    for (const [key, value] of Object.entries(obj)) {
      if (value === "") {
        setError((prev) => ({ ...prev, [key]: "Can't be blank" }));
        isValid = false;
      } else if (key !== "name" && !isNumeric(value)) {
        setError((prev) => ({ ...prev, [key]: "Wrong format, numbers only" }));
        isValid = false;
      }
    }
    return isValid;
  };

  const clearError = () => {
    setError({});
  };

  return { error, validateInputs, clearError };
};
