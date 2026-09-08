// app/blog/latest/page.tsx
import { posts } from "@/app/lib/posts";

export const dynamic = "force-dynamic"; // without this, no fetch = treated as static and frozen at first render

export default function LatestPage() {
  return (
    <div>
      <h1>Latest (always fresh)</h1>
      <p><small>Rendered at: {new Date().toISOString()}</small></p>
      <ul>
        {posts.map((p) => <li key={p.slug}>{p.title} — updated {p.updatedAt}</li>)}
      </ul>
    </div>
  );
}