import { describe, expect, it } from "vitest";
import { getAllSlugs, getPost, publishPost, posts } from "./posts";

describe("getAllSlugs", () => {
  it("returns the slug of every post", () => {
    expect(getAllSlugs()).toEqual(["hello-world", "app-router"]);
  });
});

describe("getPost", () => {
  it("finds a post by slug", () => {
    const post = getPost("hello-world");
    expect(post?.title).toBe("Hello World");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getPost("does-not-exist")).toBeUndefined();
  });
});

describe("publishPost", () => {
  it("bumps updatedAt for an existing post", () => {
    const before = posts.find((p) => p.slug === "app-router")!.updatedAt;
    publishPost("app-router");
    const after = posts.find((p) => p.slug === "app-router")!.updatedAt;
    expect(new Date(after).getTime()).toBeGreaterThanOrEqual(
      new Date(before).getTime()
    );
  });

  it("is a no-op for an unknown slug", () => {
    expect(() => publishPost("does-not-exist")).not.toThrow();
  });
});
