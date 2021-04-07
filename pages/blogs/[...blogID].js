import React from "react";
import { useRouter } from "next/router";

function BlogDetailsPage() {
  const router = useRouter();
  const { blogID } = router.query;
  return <div>this page is for blog {blogID}</div>;
}

export default BlogDetailsPage;
