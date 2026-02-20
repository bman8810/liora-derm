import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Liora Dermatology & Aesthetics",
  description:
    "Expert skincare tips, treatment insights, and dermatology news from Dr. Libby Rhee on the Upper East Side.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="bg-[#2C2C2C] text-white py-20 px-6 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">
          The Liora Journal
        </h1>
        <p className="font-sans text-lg text-[#C9B87C] max-w-2xl mx-auto">
          Expert insights on skincare, treatments, and dermatology — from our
          practice to you.
        </p>
      </section>

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#E8E4DE]"
            >
              <div className="p-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#C9B87C] mb-3">
                  {post.category}
                </span>
                <h2 className="font-serif text-xl md:text-2xl text-[#2C2C2C] group-hover:text-[#C9B87C] transition-colors mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-neutral-500 mb-4">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  &middot; {post.author}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-sm font-semibold text-[#C9B87C] group-hover:underline">
                  Read More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
