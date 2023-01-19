import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is Homepage.</h1>
      <a href="/posts/edit-post">edit post(a 連結會重整頁面)</a>
      <br />
      <Link href="/posts/edit-post">
        edit post(Link 不會重整，速度&效能更快)
      </Link>
      {/* 連結到 Next.js 之外的網頁用 a 就好 */}
    </div>
  );
}
