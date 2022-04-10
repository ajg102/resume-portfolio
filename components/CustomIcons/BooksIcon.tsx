import React from "react";
import { IconProps } from ".";

function BooksIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} focusable="false" viewBox="0 0 24 24">
      <path fill="#fbbc04" d="M6 20v-8H4v8c0 1.1.9 2 2 2h6v-2H6"></path>
      <path fill="#34a853" d="M18 20h-6v2h6a2 2 0 0 0 2-2v-8h-2v8"></path>
      <path fill="#ea4335" d="M18 2h-5v2h5v8h2V4a2 2 0 0 0-2-2"></path>
      <path
        fill="#4285f4"
        d="M6 2a2 2 0 0 0-2 2v8h2V4h2v8l2.5-1.5L13 12V2H6"
      ></path>
    </svg>
  );
}

export default BooksIcon;
