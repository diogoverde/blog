import { Layout } from "@/components/Layout";
import { getAllPostsMeta } from "@/lib/mdx";
import Link from "next/link";
import { BlogPostMeta } from "types/blogpost";

export default function Blog({ posts }: any) {
  return (
    <Layout>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Hey, I&apos;m Diogo!
      </h1>
      <h4 className="mb-4 text-xl">
        Welcome to my small piece of the internet where I write about JavaScript
        mostly and all of it&apos;s stack.
      </h4>
      <div className="w-full">
        <p className="text-3xl font-bold underline">Blog Posts</p>
        {posts.map((post: BlogPostMeta) => {
          return (
            <div key={post.title} className="w-full hover:bg-gray-600">
              <Link href={`/blog/${post.slug}`}>
                <a className="w-full">
                  <time className="uppercase text-xs text-gray-500 font-bold">
                    {post.publishedAt}
                  </time>
                  <div className="mb-4 w-full">
                    <div className="flex flex-col md:flex-row justify-between">
                      <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
                        {post.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {post.summary}
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsMeta();

  return { props: { posts } };
}
