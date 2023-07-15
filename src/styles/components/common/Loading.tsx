import styled, { keyframes } from "styled-components";

const rotateLoading = keyframes`
  0% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
  }
`;

const loadingTextOpacity = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const LoadingContainer = styled.div`
  position: relative;
  margin: 40px auto;
`;

const LoadingBox = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  border: 2px solid transparent;
  border-color: transparent #0d3471 transparent #0d3471;
  animation: ${rotateLoading} 1.5s linear 0s infinite normal;
  transform-origin: 50% 50%;
`;

const LoadingText = styled.div`
  animation: ${loadingTextOpacity} 2s linear 0s infinite normal;
  color: #0d3471;
  font-family: "Helvetica Neue, Helvetica, arial";
  font-size: 10px;
  font-weight: bold;
  margin-top: 45px;
  opacity: 0;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 0;
  width: 100px;
`;

export { LoadingContainer, LoadingBox, LoadingText };
