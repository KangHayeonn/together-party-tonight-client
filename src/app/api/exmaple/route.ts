import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ text: "exmaple next api" });
}

interface Payload {
  chatList: Array<object>;
}

export async function POST(req: NextRequest) {
  const data: ReadableStream<Uint8Array> | null = req.body;
  return NextResponse.json({});
}
