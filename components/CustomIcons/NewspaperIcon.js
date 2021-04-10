import React from "react";

function NewspaperIcon({ className = "" }) {
  return (
    <svg className={className} focusable="false" viewBox="0 0 24 24">
      <path
        fill="#34a853"
        d="M22 12h-2v6.22c-.07.48-.51.82-1 .78h-7v2h7c1.59.05 2.92-1.17 3-2.76V12"
      ></path>
      <path
        fill="#4285f4"
        d="M19 3h-7v2h7c.49-.04.92.3 1 .78V12h2V5.76A2.93 2.93 0 0 0 19 3"
      ></path>
      <path
        fill="#ea4335"
        d="M12 3H5a2.93 2.93 0 0 0-3 2.76V12h2V5.78A.94.94 0 0 1 5 5h7V3"
      ></path>
      <path
        fill="#fbbc04"
        d="M4 12H2v6.24A2.916 2.916 0 0 0 5 21h7v-2H5c-.49.04-.92-.3-1-.78L4.01 12"
      ></path>
      <path
        fill="#4285f4"
        d="M10 7H6v6h4V7m8 4h-6v2h6v-2m0 4H6v2h12v-2m0-8h-6v2h6V7"
      ></path>
    </svg>
  );
}

export default NewspaperIcon;
