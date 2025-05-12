// components/Layout.js
import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | PestFree` : "PestFree - Pest Control Experts"}
        </title>
        <meta
          name="description"
          content="Professional pest control services for homes and businesses."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link> |<Link href="/services">Services</Link> |
          <Link href="/about">About</Link> |<Link href="/contact">Contact</Link>{" "}
          |<Link href="/faq">FAQ</Link> |<Link href="/blog">Blog</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 PestFree. All rights reserved.</p>
      </footer>
    </>
  );
}
