import styled from "styled-components";

const ModalFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 500px;
  width: 500px;

  & > div {
    position: absolute;
    top: -50px;
    left: 0px;
    width: 600px;
    height: 600px;

    & > div {
      border-radius: 0px 0px 20px 20px;
    }
  }
`;

export { ModalFormWrapper };
