// pages/blog/[slug].js
import { useRouter } from "next/router";
import React from "react";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main>
      <h1>Blog Post: {slug}</h1>
      <p>This is a blog post about {slug}.</p>
    </main>
  );
}
