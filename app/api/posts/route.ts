// app/api/posts/route.ts
import { posts } from "@/app/lib/posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  const data = slug ? posts.find((p) => p.slug === slug) : posts;
  return NextResponse.json(data);
}