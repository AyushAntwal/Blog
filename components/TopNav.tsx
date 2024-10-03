import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from the correct package

export function TopNav({ children }) {
  return (
    <nav>
      <Link href="/">
        <Image src="/images/blog.png" alt="logo" width={50} height={50} />
      </Link>
      {/* <section>{children}</section> */}
      <section>
        <Link href="/about">
          <span className="material-symbols-outlined text-black">person</span>
        </Link>
      </section>
      <style jsx>
        {`
          nav {
            top: 0;
            position: fixed;
            width: 100%;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 0.5rem 1rem;
            background: rgb(131 123 123 / 0%)
            border-bottom: 1px solid var(--border-color);
          }
          nav :global(a) {
            text-decoration: none;
          }

          section {
            display: flex;
            gap: 1rem;
            padding: 0;
          }
        `}
      </style>
    </nav>
  );
}
