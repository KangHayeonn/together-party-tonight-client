"use client";

import { fetchPosts } from "@/api/test";
import { nameState } from "@/recoil/sample/sampleState";
import { StyledButton } from "@/styles/page/sample";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";

export default function Home() {
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
    </div>
  );
}
