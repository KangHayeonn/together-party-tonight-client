import styled from "styled-components";

const ClubWriteImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1.5rem;
`;

const ClubWriteImageBtn = styled.div`
  display: flex;
  align-items: center;
`;

const ClubImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 415px;
  min-width: 415px;
  height: 255px;
  background-color: #d9d9d9;

  .image {
    margin-bottom: 1.5rem;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ClubImageInput = styled.input`
  display: none;
`;

const ImageText = styled.span`
  font-size: 0.725rem;
  color: #b1b1b1;
  letter-spacing: 0.25px;
`;

const Button = styled.button`
  appearance: none;
  background-color: transparent;
  font-size: 0.75rem;
  letter-spacing: 0.25px;
  color: #b1b1b1;

  &:hover {
    opacity: 0.5;
  }
`;

const ClubImageUpdateBtn = styled.span`
  background-color: transparent;
  font-size: 0.75rem;
  letter-spacing: 0.25px;
  color: #b1b1b1;

  &:hover {
    opacity: 0.5;
  }
`;

const Line = styled.div`
  border-left: 1px solid #b1b1b1;
  height: 11px;
  margin: 0px 5px 0px 6px;
`;

export {
  ClubWriteImageWrapper,
  ClubWriteImageBtn,
  ClubImage,
  ClubImageInput,
  ImageText,
  Button,
  ClubImageUpdateBtn,
  Line,
};
