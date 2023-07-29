import {
  Member,
  MemberCnt,
  MemberListWrapper,
  MemberWrapper,
  ModalInnerMini,
} from "@/styles/components/mypage/ApplyDetailModal";
import Modal from "../common/Modal";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { ModalAtom } from "@/recoil/modal/atom";
import { useState } from "react";
import { ApplicationItem } from "@/types/mypage";
import {
  ClearBtn,
  InpContainer,
  InpPay,
  RequestBtnWrapper,
} from "@/styles/components/mypage/RequestCalcModal";
import TextButton from "../common/TextButton";

export default function RequestCalcModal() {
  const { clubItem, clubId } = useRecoilValue(ModalAtom);
  const [currentMember, setCurrentMember] = useState<ApplicationItem[]>([]);
  const [inpPay, setInpPay] = useState(0);

  const dummyList = [
    {
      memberId: 1,
      nickName: "정기수",
      profileImage: "/images/Naver.svg",
    },
    {
      memberId: 2,
      nickName: "정기수2",
      profileImage: "/images/Naver.svg",
    },
  ];

  return (
    <Modal title="정산요청">
      <ModalInnerMini>
        <InpContainer>
          <InpPay
            type="number"
            placeholder="금액 입력(원)"
            value={inpPay || ""}
            onChange={(e) => setInpPay(Number(e.target.value))}
          />
          <ClearBtn onClick={() => setInpPay(0)}>
            <Image
              src="/images/off_close.svg"
              width={20}
              height={20}
              alt="입력 금액 초기화"
            />
          </ClearBtn>
        </InpContainer>
        <MemberListWrapper>
          <MemberCnt>정산 멤버 {dummyList.length}</MemberCnt>
          {dummyList.length > 0 &&
            dummyList.map((item) => (
              <MemberWrapper key={item.memberId}>
                <Member>
                  <Image
                    src={item.profileImage}
                    width={40}
                    height={40}
                    alt="멤버 사진"
                  />
                  {item.nickName}
                </Member>
                <p>{Math.ceil(inpPay / dummyList.length)}</p>
              </MemberWrapper>
            ))}
        </MemberListWrapper>
        <RequestBtnWrapper>
          <TextButton
            text="정산요청"
            onClick={() => console.log(1)}
            fontSize={16}
            width={150}
            height={45}
          />
        </RequestBtnWrapper>
      </ModalInnerMini>
    </Modal>
  );
}
