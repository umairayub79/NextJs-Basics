import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        Names
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/names"><a>Name Listing</a></Link>
    </nav>
  );
};

export default Navbar;
