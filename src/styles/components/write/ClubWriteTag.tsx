import styled from "styled-components";

const ClubWriteTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 42.6rem;
  white-space: normal;
  font-size: 1.15rem;
  font-weight: 500;
  color: #b1b1b1;
  letter-spacing: 0.25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dee3ea;
`;

const ClubWriteToggle = styled.div`
  position: absolute;
  top: 25px;
  width: 16rem;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ToggleText = styled.p`
  font-size: 0.7rem;
  color: #fff;
  letter-spacing: 0.1px;
`;

const TagListWrapper = styled.div`
  display: flex;
`;

const TagItemWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: 1.7rem;
  background-color: #bdc8d6;
  border-radius: 25px;
  padding: 5px 10px;
  gap: 0.75rem;
  margin-right: 10px;

  span {
    color: #fff;
    font-size: 0.73rem;
  }
`;

const TagInputWrapper = styled.div`
  position: relative;
`;

const TagInput = styled.input`
  width: 14rem;
  color: #000;
  font-size: 0.875rem;
  padding: 3px 10px;
  border: none;
  background: transparent;
  outline: none;

  &:focus {
    border: 1px solid #bdc8d6;
    border-radius: 5px;
  }
`;

export {
  ClubWriteTagWrapper,
  ClubWriteToggle,
  ToggleText,
  TagListWrapper,
  TagItemWrapper,
  TagInputWrapper,
  TagInput,
};
