import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="border-[1.5px] border-blue-400 w-[100%] bg-white flex flex-col rounded-lg mt-4 max-h-72 overflow-y-auto shadow-xl">
      {results.map((result, index) => {
        return (
          <SearchResult
            title={result.title}
            image={result.image}
            message={result.message}
            id={result.id}
            key={index}
          />
        );
      })}
    </div>
  );
};
