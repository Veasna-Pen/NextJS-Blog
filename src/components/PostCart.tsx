import Link from "next/link";

const PostCart = () => {
  return (
    <div className="card w-full bg-gray-600 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href='/blog/1' className="text-gray-300 hover:text-gray-500 transition-colors">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCart;
