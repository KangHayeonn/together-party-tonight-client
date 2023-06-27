"use client";

import TextButton from "@/components/common/TextButton";
import { useParams } from "next/navigation";

export default function MyPage() {
  const { slug } = useParams();

  return <div>{slug}</div>;
}
