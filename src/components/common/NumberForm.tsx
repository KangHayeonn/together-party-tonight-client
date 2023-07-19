"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  NumberWrapper,
  NumberInput,
} from "@/styles/components/common/NumberForm";

interface NumberProps {
  min?: number;
  max?: number;
  changeMax?: (maximum: number) => void | undefined;
}

const NumberForm = ({ min = 0, max = 20, changeMax }: NumberProps) => {
  const [number, setNumber] = useState<number>(min);
  const minNum = min;
  const maxNum = max;

  const minusNumber = () => {
    if (number <= minNum) return;
    setNumber((num: number) => (num -= 1));
  };

  const plusNumber = () => {
    if (number >= maxNum) return;
    setNumber((num: number) => (num += 1));
  };

  useEffect(() => {
    if (changeMax) changeMax(number);
  }, [number]);

  return (
    <NumberWrapper>
      <Image
        src="/images/minusIcon.svg"
        width={30}
        height={30}
        alt="Number Minus Icon"
        onClick={minusNumber}
      />
      <NumberInput type="number" value={number} disabled />
      <Image
        src="/images/plusIcon.svg"
        width={30}
        height={30}
        alt="Number Plus Icon"
        onClick={plusNumber}
      />
    </NumberWrapper>
  );
};

export default NumberForm;
