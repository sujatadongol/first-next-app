// app/blog/page.tsx
import Link from "next/link";
import { posts } from "@/app/lib/posts";

export default function BlogIndex() {
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.slug}>
          <Link href={`/blog/${p.slug}`}>{p.title}</Link>
        </li>
      ))}
      <li>
        <Link href="/blog/latest">Latest (SSR)</Link>
      </li>
    </ul>
  );
}
