import Head from "next/head";
import SearchHeader from "../components/Navigation/SearchHeader";

function SearchPage() {
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>

      <SearchHeader />
    </div>
  );
}

export default SearchPage;
