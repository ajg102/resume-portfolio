import React from "react";
import Link from "next/link";
import BasicLayout from "../../components/layout/BasicLayout";

function BlogPage() {
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
    </div>
  );
}

BlogPage.layout = BasicLayout;

export default BlogPage;
