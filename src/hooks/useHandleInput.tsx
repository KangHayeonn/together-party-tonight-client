import { useState } from "react";

export type InputValueType = {
  [key: string]: string;
};

const useHandleInput = (
  initialValues: InputValueType,
): [
  InputValueType,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (resetInitValues: InputValueType) => void,
] => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = (resetInitValues: InputValueType) => {
    setFormValues({ ...resetInitValues });
  };

  return [formValues, handleChange, resetForm];
};

export default useHandleInput;
