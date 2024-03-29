import styled from "styled-components";

const ModalInner = styled.div`
  width: 630px;
  /* min-height: 443.5px; */
  padding: 30px 50px;
`;

const ReviewerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;

  & img {
    border-radius: 50%;
  }
`;

const CreatedReview = styled.p`
  font-size: 14px;
  color: #727272;
`;

const MeetingInfo = styled.div`
  display: flex;
  margin: 20px 0;
`;

const InfoWrapper = styled.div`
  margin: 10px 0 0 40px;

  & p {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }

  & img {
    margin-right: 10px;
  }
`;

const EditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-right: 2px;
  }
`;

const EditBtn = styled.button`
  background-color: #fff;
  margin-left: 8px;
`;

const TextWrapper = styled.div`
  margin: 15px 0;
  font-size: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  font-size: 15px;
  background-color: #f5f5f5;
  border-color: #f5f5f5;
  border-radius: 3px;
  resize: none;
  padding: 10px;
  &::placeholder {
    color: #a2a2a2;
  }
`;

const TextLen = styled.p`
  float: right;
  font-size: 12px;
  color: #778da9;
`;

const EditBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

const ImgEditLabel = styled.label`
  display: flex;
  align-items: center;
`;

const ReviewProfile = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 0;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & img {
    border-radius: 15px;
  }
`;

export {
  ModalInner,
  ReviewerInfo,
  Reviewer,
  CreatedReview,
  MeetingInfo,
  InfoWrapper,
  EditWrapper,
  RatingWrapper,
  EditBtn,
  TextWrapper,
  TextArea,
  TextLen,
  EditBtnWrapper,
  ImgEditLabel,
  ReviewProfile,
};
