import React from "react";

function PlayIcon({ className = "" }) {
  return (
    <svg className={className} focusable="false" viewBox="0 0 24 24">
      <path fill="#4285f4" d="M10 16.5l6-4.5-6-4.5"></path>
      <path
        fill="#ea4335"
        d="M20 12h2v7.5a2.5 2.5 0 0 1-2.5 2.5H12v-2h7a1 1 0 0 0 1-1v-7"
      ></path>
      <path
        fill="#fbbc04"
        d="M20 12V5a1 1 0 0 0-1-1h-7V2h7.6A2.4 2.4 0 0 1 22 4.4V12h-2"
      ></path>
      <path
        fill="#34a853"
        d="M12 20v2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2H12v2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7"
      ></path>
    </svg>
  );
}

export default PlayIcon;
