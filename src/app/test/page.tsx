"use client";

import { fetchPosts } from "@/api/test";
import { nameState } from "@/recoil/nameState";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";

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

  const exampleApi = async () => {
    await fetch("/api/example", {
      method: "GET",
    }).then((res) => console.log(res));
  };

  exampleApi();

  return (
    <div>
      <h1>Test</h1>
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
