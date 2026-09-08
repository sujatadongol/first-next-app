// app/blog/[slug]/actions.ts
"use server";
import { revalidatePath } from "next/cache";
import { publishPost } from "@/app/lib/posts";

export async function republish(slug: string) {
  publishPost(slug);           // mutate the "database"
  revalidatePath(`/blog/${slug}`); // force that cached page to regenerate now
  revalidatePath("/blog");         // and any listing page too
}