import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Nav = () => {
  return (
    <nav className="flex justify-between text-2xl text-nav font-semibold">
      <div className="flex items-center space-x-4"></div>
      <div className="flex flex-row space-x-4 items-center">
        <Link href="/">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Nav;
