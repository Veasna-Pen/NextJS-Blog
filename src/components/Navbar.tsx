import { BookAudio } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-neutral-500">
      <div className="container">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost text-xl uppercase text-gray-100 font-medium"
          >
            <BookAudio />
          </Link>
        </div>
        <div className="flex-none">
          <Link href="/create" className="btn btn-ghost text-gray-100">
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
