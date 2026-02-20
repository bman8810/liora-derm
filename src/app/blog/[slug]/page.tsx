import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Liora Dermatology`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      ...(post.image && { images: [{ url: post.image }] }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <section className="bg-[#2C2C2C] text-white pt-32 pb-16 px-6 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#C9B87C] mb-4">
          {post.category}
        </span>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-neutral-400 text-sm">
          {formattedDate} &middot; {post.author}
        </p>
      </section>

      {/* Hero Image */}
      {post.image && (
        <div className="max-w-4xl mx-auto px-6 -mt-8">
          <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-[#2C2C2C]
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-neutral-700 prose-p:leading-relaxed
            prose-li:text-neutral-700
            prose-a:text-[#C9B87C] prose-a:underline
            prose-strong:text-[#2C2C2C]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share CTA */}
        <div className="mt-12 pt-8 border-t border-[#E8E4DE]">
          <p className="text-sm text-neutral-500 mb-3 font-semibold uppercase tracking-wider">
            Share This Article
          </p>
          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.lioradermatology.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C2C2C] text-white text-sm hover:bg-[#C9B87C] transition-colors"
            >
              𝕏 Share
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.lioradermatology.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C2C2C] text-white text-sm hover:bg-[#C9B87C] transition-colors"
            >
              Facebook
            </a>
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2C2C2C] text-white text-sm hover:bg-[#C9B87C] transition-colors cursor-pointer"
              title="Copy link"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Zocdoc Booking CTA */}
        <div className="mt-12 bg-[#2C2C2C] rounded-xl p-8 text-center text-white">
          <h3 className="font-serif text-2xl mb-3">
            Ready to Transform Your Skin?
          </h3>
          <p className="text-neutral-300 mb-6 max-w-md mx-auto">
            Schedule a consultation with Dr. Libby Rhee at Liora Dermatology
            &amp; Aesthetics on the Upper East Side.
          </p>
          <a
            href="https://www.zocdoc.com/doctor/libby-rhee-do-ms-faad-439190"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#C9B87C] text-[#2C2C2C] font-semibold rounded-full hover:bg-[#D4C68E] transition-colors"
          >
            Book on Zocdoc
          </a>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h2 className="font-serif text-2xl text-[#2C2C2C] mb-6">
            More From the Journal
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-[#E8E4DE] hover:shadow-md transition-shadow"
              >
                {r.image && (
                  <div className="relative w-full aspect-[2/1]">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9B87C]">
                    {r.category}
                  </span>
                  <h3 className="font-serif text-lg text-[#2C2C2C] group-hover:text-[#C9B87C] transition-colors mt-2 mb-2 leading-tight">
                    {r.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{r.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
