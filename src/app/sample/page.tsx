"use client";

import { useState } from "react";
import { fetchPosts } from "@/api/test";
import { nameState } from "@/recoil/sample/sampleState";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { StyledButton } from "@/styles/page/sample";
import TextButton from "@/components/common/TextButton";
import TextField from "@/components/common/TextField";
import SearchForm from "@/components/common/SearchForm";
import NumberForm from "@/components/common/NumberForm";
import CheckBox from "@/components/common/CheckBox";

export default function Home() {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const [search, setSearch] = useState<string>("");

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
      <SearchForm search={search} onChangeSearch={onChangeSearch} />
      <NumberForm min={0} max={10} />
      <CheckBox text="한식" />
    </div>
  );
}
