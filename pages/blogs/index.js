import React, { useState } from "react";
import Link from "next/link";
import BasicLayout from "../../components/layout/BasicLayout";
import { useRouter } from "next/router";

function BlogPage() {
  const router = useRouter();
  const [page, setPage] = useState("");
  const goToPage = () => {
    router.push(`/blogs/${page}`);
  };
  return (
    <div>
      <Link href="/blogs/1">
        <a>Blog 1</a>
      </Link>
      <Link href="/blogs/2">
        <a>Blog 2</a>
      </Link>
      <Link href="/blogs/3">
        <a>Blog 3</a>
      </Link>
      <input value={page} onChange={(e) => setPage(e.target.value)} />
      <button onClick={goToPage}>Go to page {page}</button>
    </div>
  );
}

BlogPage.layout = BasicLayout;

export default BlogPage;
