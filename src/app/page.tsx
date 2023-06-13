import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>App directory tutorial</h1>
      <ul>
        <li><Link href="/"></Link>Home</li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/team">Team</Link></li>
      </ul>
    </>
  );
}

export default HomePage;