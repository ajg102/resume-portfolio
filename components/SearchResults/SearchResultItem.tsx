import React from "react";
import { SearchResultItemType } from ".";

function SearchResultItem({
  title = "",
  snippet = "",
  link = "",
  formattedUrl = "",
}: SearchResultItemType) {
  return (
    <div className="max-w-xl mb-8">
      <div className="group">
        <a href={link} className="text-sm">
          {formattedUrl}
        </a>
        <a href={link}>
          <h2 className="group-hover:underline truncate text-xl text-blue-800 font-medium">
            {title}
          </h2>
        </a>
      </div>
      <p>{snippet}</p>
    </div>
  );
}

export default SearchResultItem;
