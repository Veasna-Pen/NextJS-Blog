import { FilePenLine, X } from "lucide-react";
import Link from "next/link";

const ButtonAction = () => {
  return (
    <div>
      <Link href="/edit/id" className="btn btn-info mr-2"><FilePenLine /></Link>
      <button className="btn btn-error"><X /></button>
    </div>
  );
};

export default ButtonAction;
