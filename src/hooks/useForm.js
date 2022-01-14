// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initFormValue) => {
  const [formValue, setFormValue] = useState(initFormValue);

  const handleFormChanges = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return [formValue, handleFormChanges];
};
