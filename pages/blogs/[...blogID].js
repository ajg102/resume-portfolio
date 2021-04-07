import React from "react";
import { useRouter } from "next/router";

function BlogDetailsPage({ data = "" }) {
  return (
    <div>
      <code>{data}</code>
    </div>
  );
}

export default BlogDetailsPage;

export async function getServerSideProps(context) {
  const { blogID } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${blogID}`);
  const parsedRes = await res.json();
  return {
    props: {
      data: JSON.stringify(parsedRes)
    } // will be passed to the page component as props
  };
}
