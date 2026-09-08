// lib/posts.ts
export type Post = {
  slug: string;
  title: string;
  body: string;
  updatedAt: string;
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    body: "First post.",
    updatedAt: new Date().toISOString(),
  },
  {
    slug: "app-router",
    title: "App Router Notes",
    body: "Learning caching today.",
    updatedAt: new Date().toISOString(),
  },
];

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function publishPost(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (post) post.updatedAt = new Date().toISOString();
}
