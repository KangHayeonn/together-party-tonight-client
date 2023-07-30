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
import { useMutation, useQuery } from "@tanstack/react-query";
import MyPage from "@/api/mypage";
import { LoadingWrapper } from "@/styles/page/MyPage/MyInfo";
import Loading from "../common/Loading";

export default function RequestCalcModal() {
  const { clubId } = useRecoilValue(ModalAtom);
  const [currentMember, setCurrentMember] = useState<ApplicationItem[]>([]);
  const [price, setPrice] = useState(0);

  const { isLoading } = useQuery(
    ["application", clubId],
    () => MyPage.v1GetApplicationList(clubId),
    {
      onSuccess: (data) => {
        const approvedItems = data.applicationList.filter(
          (item: ApplicationItem) => item.approvalStatus === "APPROVE",
        );
        setCurrentMember(approvedItems);
      },
    },
  );

  const { mutate: requestBilling } = useMutation(
    ({ clubId, price }: { clubId: number; price: number }) =>
      MyPage.v1RequestBilling(clubId, price),
    {
      onSuccess: (res) => {
        console.log(res);
      },
    },
  );

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Modal title="정산요청">
      <ModalInnerMini>
        <InpContainer>
          <InpPay
            type="number"
            placeholder="금액 입력(원)"
            value={price || ""}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <ClearBtn onClick={() => setPrice(0)}>
            <Image
              src="/images/off_close.svg"
              width={20}
              height={20}
              alt="입력 금액 초기화"
            />
          </ClearBtn>
        </InpContainer>
        <MemberListWrapper>
          <MemberCnt>정산 멤버 {currentMember.length}</MemberCnt>
          {currentMember.length > 0 &&
            currentMember.map((item) => (
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
                <p>{Math.ceil(price / currentMember.length + 1)}</p>
              </MemberWrapper>
            ))}
        </MemberListWrapper>
        <RequestBtnWrapper>
          <TextButton
            text="정산요청"
            onClick={() => requestBilling({ clubId, price })}
            fontSize={16}
            width={150}
            height={45}
          />
        </RequestBtnWrapper>
      </ModalInnerMini>
    </Modal>
  );
}
