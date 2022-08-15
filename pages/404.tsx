import React from "react";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="max-w-screen-sm fourOhFour mx-auto w-full">
      <div className="h-full flex flex-col justify-center items-center">
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </div>
    </div>
  );
}
