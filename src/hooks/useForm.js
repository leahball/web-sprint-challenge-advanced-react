// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initFormValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formValues, setFormValues] = useState(initFormValue);

  const handleFormChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [showSuccessMessage, formValues, handleFormChanges, handleFormSubmit];
};
