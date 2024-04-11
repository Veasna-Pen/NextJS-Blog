import PostCart from "@/components/PostCart";

export default function Home() {
  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
      <PostCart />
      <PostCart />
      <PostCart />
    </main>
  );
}
