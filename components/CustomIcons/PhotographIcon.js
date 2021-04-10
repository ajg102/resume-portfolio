import React from "react";

function PhotographIcon({ className = "" }) {
  return (
    <svg
      className={className}
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path clipRule="evenodd" fill="none" d="M0 0h24v24H0z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#4285F4"
        d="M19 22h-7v-2h7c.55 0 1-.46 1-1V5a1 1 0 0 0-1-.99L12 4V2h7c1.66 0 3 1.36 3 3v14c0 1.65-1.35 3-3 3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#EA4335"
        d="M12 22H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h7v2H5c-.55 0-.99.45-.99 1L4 19c0 .55.45 1 1 1h7v2z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#34A853"
        d="M14 13l-2.25 2.75L10 14l-4 4h12z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FBBC04"
        d="M10 8c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.09.9-2 2-2s2 .9 2 2"
      ></path>
    </svg>
  );
}

export default PhotographIcon;
