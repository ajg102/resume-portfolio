import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/Navigation/SearchHeader";
import SearchResults from "../components/SearchResults";
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
