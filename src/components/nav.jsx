import {
  faHome,
  faPerson,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Nav = () => {
  return (
    <nav className="flex justify-between text-2xl text-nav font-semibold">
      <div className="flex items-center space-x-4"></div>
      <div className="flex flex-row space-x-4 items-center">
        <Avatar>
          <AvatarFallback>
            <FontAwesomeIcon icon={faUser} />
          </AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Nav;
