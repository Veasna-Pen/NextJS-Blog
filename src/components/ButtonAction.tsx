'use client'
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FilePenLine, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ButtonActionProps {
  id: string;
}

const ButtonAction: FC<ButtonActionProps> = ({ id }) => {
  const router = useRouter();
  const { mutate: deletePost, isSuccess } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${id}`);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (res) => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div>
      <Link href={`/edit/${id}`} className="btn btn-info mr-2">
        <FilePenLine /> Edit
      </Link>
      <button onClick={() => deletePost()} className="btn btn-error">
        {isSuccess && <span className="loading loading-spinner"></span> }
       {isSuccess ? 'Loading' :  (<><X /> Delete</>)}
      </button>
    </div>
  );
};

export default ButtonAction;
