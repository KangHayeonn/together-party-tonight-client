"use client";

import { useState, useRef, useEffect } from "react";
import { fetchPosts } from "@/api/test";
import { nameState } from "@/recoil/sample/sampleState";
import { StyledButton } from "@/styles/page/sample";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import TextButton from "@/components/common/TextButton";
import TextField from "@/components/common/TextField";
import SearchForm from "@/components/common/SearchForm";
import NumberForm from "@/components/common/NumberForm";
import CheckBox from "@/components/common/CheckBox";
import ToastBox from "@/components/common/ToastBox";
import RoundButton from "@/components/common/RoundButton";
import DropDown from "@/components/common/DropDown";
// socket
import useSocket from "@/hooks/useSocket";
import ConfirmModal from "@/components/common/modal/ConfirmModal";

export default function Home() {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [socketConnected, setSocketConnected] = useState<boolean>(false);
  const [
    socketConnect,
    socketDisconnect,
    socketRequestMessage,
    socketReceiveMessage,
    socketClose,
  ] = useSocket();

  // modal
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const submitModal = () => {
    // TODO : api logic
  };
  const handleOpenModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpenModal(true);
  };

  // react-query
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // recoil
  const [name, setNameState] = useRecoilState(nameState);

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameState(e.target.value);
  };

  const onClickEvent = () => {
    router.push("/");
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickRoundBtnEvent = () => {
    // click check
  };

  // socket 연동 테스트
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!ws.current) {
      if (socketConnect(ws)) setSocketConnected(true);
    }

    socketDisconnect(ws);
    socketReceiveMessage(ws);

    return () => {
      // socket clean up
      socketClose(ws);
    };
  }, []);

  useEffect(() => {
    if (socketConnected) {
      if (!ws.current) {
        socketRequestMessage(ws);
      }
    }
  }, [socketConnected]);

  return (
    <div>
      <h1>Test</h1>
      <StyledButton>Button</StyledButton>
      <p>Hello, {name}</p>
      <input
        type="text"
        name="name"
        onChange={updateName}
        placeholder="Enter Name"
      />
      <h2>Common Components</h2>
      <TextButton text="모임 만들기" onClick={onClickEvent} />
      <TextField message={message} onChangeText={onChangeMessage} />
      <SearchForm search={search} />
      <NumberForm min={0} max={30} />
      <CheckBox text="한식" />
      <RoundButton text="#태그" onClickEvent={onClickRoundBtnEvent} />
      <DropDown />
      <button onClick={() => handleOpenModal()}>모달 열기</button>
      {isOpenModal && (
        <ConfirmModal
          modalTitle="정말 탈퇴하시겠습니까?"
          modalText="회원 탈퇴시 모든 정보가 삭제되며 복구되지 않습니다."
          modalSubText="그래도 탈퇴하시겠습니까?"
          onClose={setIsOpenModal}
          handleSubmit={submitModal}
        />
      )}
    </div>
  );
}
