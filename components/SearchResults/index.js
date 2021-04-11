import SearchResultItem from "./SearchResultItem";

function SearchResults({ results = [] }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-40">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About 69 results in .69 seconds
      </p>
      {results.map((item, index) => (
        <SearchResultItem {...item} key={`${index}`} />
      ))}
    </div>
  );
}

export default SearchResults;
