import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

const name = "Bajohn";
const webSiteTitle = "Next.js practice";

export default function Layout({ children, returnBack }) {
  return (
    <div className={styles.layout}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="author" content="Bajohn" />
      </Head>
      {/* next 有一個自己的 Head 標籤，要 import */}
      <header className={styles.header}>
        <h1>{webSiteTitle}</h1>
        <h2>Author: {name}</h2>
      </header>

      <main>{children}</main>
      {returnBack && (
        <Link className={styles.home} href="/">
          Back to Home
        </Link>
      )}
    </div>
  );
}
