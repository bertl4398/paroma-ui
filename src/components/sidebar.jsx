import {
  faDashboard,
  faHandsBubbles,
  faHandshake,
  faHeartPulse,
  faHome,
  faLegal,
  faListCheck,
  faMessage,
  faNoteSticky,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Sidebar = () => {
  return (
    <nav className="h-screen max-h-screen text-2xl font-semibold bg-nav text-gray-300 sticky top-0 pt-2">
      <Image src="/img/paroma-med-logo.png" alt="" width="205" height="1" />
      <div className="my-8 hover:bg-slate-800">
        <Link
          href="/"
          className="flex flex-row justify-start content-center mx-2"
        >
          <FontAwesomeIcon icon={faHandshake} className="py-1" />
          <p className="mx-2">Consent</p>
        </Link>
      </div>
      <div className="my-8 hover:bg-slate-800">
        <Link
          href="/notifications"
          className="flex flex-row justify-start content-center mx-2"
        >
          <FontAwesomeIcon icon={faMessage} className="py-1" />
          <p className="mx-2">Notifications</p>
        </Link>
      </div>
      <div className="my-8 hover:bg-slate-800">
        <Link
          href="/compliance"
          className="flex flex-row justify-start content-center mx-2"
        >
          <FontAwesomeIcon icon={faLegal} className="py-1" />
          <p className="mx-2">Compliance</p>
        </Link>
      </div>
      <div className="my-8 hover:bg-slate-800">
        <Link
          href="/services"
          className="flex flex-row justify-start content-center mx-2"
        >
          <FontAwesomeIcon icon={faHeartPulse} className="py-1" />
          <p className="mx-2">Services</p>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
