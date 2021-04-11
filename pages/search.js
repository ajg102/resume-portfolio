import Head from "next/head";
import SearchHeader from "../components/Navigation/SearchHeader";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";
import DummyData from "../data/searchResults";

function SearchPage() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query?.q} - Alex Glick</title>
      </Head>

      <SearchHeader />

      <SearchResults results={DummyData} />
    </div>
  );
}

export default SearchPage;

// export async function getServerSideProps(context) {
//   const searchQuery = context.query.q || "";
//   return {
//     props: {
//       searchQuery
//     }
//   };
// }
