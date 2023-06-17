"use client";

import { fetchPosts } from "@/api/test";
import { nameState } from "@/recoil/sample/sampleState";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import TextButton from "@/components/common/TextButton";
import { StyledButton } from "@/styles/page/Sample";

export default function Home() {
  const router = useRouter();

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
    </div>
  );
}
