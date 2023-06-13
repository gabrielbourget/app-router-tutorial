import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Home</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">About the Team</Link>
          <Link href="/code/repos">Repos</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;