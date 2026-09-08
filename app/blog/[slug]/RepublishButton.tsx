// app/blog/[slug]/RepublishButton.tsx
"use client";
import { republish } from "./actions";

export default function RepublishButton({ slug }: { slug: string }) {
  return (
    <form action={async () => { await republish(slug); }}>
      <button type="submit">Republish now</button>
    </form>
  );
}