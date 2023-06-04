"use client";

import { fetchPosts } from "@/api/test";
import { nameState } from "@/recoil/nameState";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 6px 12px;
  border: 1px solid lightgray;
  color: gray;
  background-color: violet;
`;

export default function Home() {
  // react-query
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  console.log("query: ", isLoading, error, data);

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
