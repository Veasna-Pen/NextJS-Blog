import { Tag } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";

interface PostCartProps {
  post: {
    id: String;
    title: String;
    content: String;
    tag: Tag;
  };
}

const PostCart: FC<PostCartProps> = ({ post }) => {
  const { id, title, content, tag } = post;
  return (
    <div className="card w-full bg-gray-600 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-white">{content}</p>
        <div className="card-actions justify-end">
          <span className="badge">{tag.name}</span>
          <Link
            href={`/blog/${id}`}
            className="text-gray-300 hover:text-gray-500 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCart;
