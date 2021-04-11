import React from "react";

function SearchResultItem({
  title = "",
  snippet = "",
  link = "",
  formattedUrl = ""
}) {
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
      <p className="">{snippet}</p>
    </div>
  );
}

export default SearchResultItem;
