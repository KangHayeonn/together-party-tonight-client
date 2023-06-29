"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  SliderWrapper,
  SliderPreview,
  SliderInput,
  SliderContents,
  SliderContent,
} from "@/styles/components/common/SliderForm";

interface SliderFormProps {
  sliderType?: string;
  minText?: string;
  maxText?: string;
  defaultValue?: number;
}

const SliderForm = ({
  sliderType,
  minText,
  maxText,
  defaultValue = 0,
}: SliderFormProps) => {
  const [sliderValue, setSliderValue] = useState<number>(defaultValue);
  const [previewText, setPreviewText] = useState<string>("");
  const [switchColor, setSwitchColor] = useState<string>("");
  const [switchLeft, setSwitchLeft] = useState<string>("");

  const rangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
    getLeftColor(sliderValue);
    getPreviewPosition(sliderValue);
  };

  const getLeftColor = useCallback((value: number) => {
    const primaryColor = "#415A77";
    const secondaryColor = "#778DA9";
    const percentage = (value / 10) * 100;
    setSwitchColor(`linear-gradient(to right,
                    ${primaryColor} 0%, ${primaryColor} ${percentage}%,
                    ${secondaryColor} ${percentage}%, ${secondaryColor} 100%)`);
  }, []);

  const getPreviewPosition = useCallback((value: number) => {
    const newVal = (value * 100) / 10;
    if (value === 0) setSwitchLeft("1.25rem");
    else if (value === 10) setSwitchLeft("calc(100% - 1rem)");
    else setSwitchLeft(`calc(${newVal}% + (${8 - newVal * 0.15}px))`);
  }, []);

  useEffect(() => {
    const unit = sliderType === "distance" ? "km" : "인원";
    setPreviewText(`${sliderValue}${unit}`);
    getLeftColor(sliderValue);
    getPreviewPosition(sliderValue);
  }, [sliderType, sliderValue, getLeftColor, getPreviewPosition]);

  return (
    <SliderWrapper>
      <SliderPreview style={{ left: switchLeft }}>{previewText}</SliderPreview>
      <SliderInput
        type="range"
        min="0"
        max="10"
        step="1"
        style={{ background: switchColor }}
        value={sliderValue}
        onChange={rangeEvent}
      />
      <SliderContents>
        <SliderContent>{minText}</SliderContent>
        <SliderContent>{maxText}</SliderContent>
      </SliderContents>
    </SliderWrapper>
  );
};

export default SliderForm;
