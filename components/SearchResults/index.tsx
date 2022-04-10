import SearchResultItem from "./SearchResultItem";

export type SearchResultItemType = {
  title: string;
  snippet: string;
  link: string;
  formattedUrl: string;
};

type SearchResultsProps = {
  results: SearchResultItemType[];
};

function SearchResults({ results = [] }: SearchResultsProps) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-40">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About 100 results in .55 seconds
      </p>
      {results.map((item, index) => (
        <SearchResultItem {...item} key={`${index}`} />
      ))}
    </div>
  );
}

export default SearchResults;
