import { useState } from "react";

export type InputValueType = {
  [key: string]: string | number;
};

const useHandleInput = (
  initialValues: InputValueType,
): [InputValueType, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return [formValues, handleChange];
};

export default useHandleInput;
