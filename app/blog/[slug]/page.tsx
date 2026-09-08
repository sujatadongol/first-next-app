// app/blog/[slug]/page.tsx
import { getAllSlugs, getPost } from "@/app/lib/posts";
import RepublishButton from "./RepublishButton";

export const revalidate = 60;

export async function generateStaticParams() {
  console.log(">>> generateStaticParams called", getAllSlugs());
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // params is now a Promise — must await it
  const post = getPost(slug);

  return (
    <article>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <p>
        <small>Data last updated at: {post?.updatedAt}</small>
      </p>
      <RepublishButton slug={slug} />
    </article>
  );
}
