import {
  LoadingContainer,
  LoadingText,
  LoadingBox,
} from "@/styles/components/common/Loading";
import React from "react";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingBox />
      <LoadingText id="loading-text">Loading...</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
