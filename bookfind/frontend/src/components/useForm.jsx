import React, { useState } from "react";

export const useForm = (initialValue) => {
  const [formValues, setFormValues] = useState(initialValue);

  const herokuURL = "https://book-finder-app-7ff92867b74e.herokuapp.com/api";
  const localURL = "http://localhost:5001/api";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(e.target.value);
  };

  const handleReset = () => {
    setFormValues(initialValue);
  };
  return {
    formValues,
    setFormValues,
    handleChange,
    handleReset,
    herokuURL,
    localURL
  };
};
