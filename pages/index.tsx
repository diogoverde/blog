import { Layout } from "@/components/Layout";
import { getAllPostsMeta } from "@/lib/mdx";
import { parseISO, format } from "date-fns";
import Link from "next/link";
import { BlogPostMeta } from "types/blogpost";

export default function Blog({ metas }: any) {
  return (
    <Layout>
      <div className="flex justify-between">
        <div className="animate-wiggle  text-4xl">👋</div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ">
          <span>Hey, I&apos;m Diogo!</span>
        </h1>
      </div>
      <h4 className="mb-4 text-xl">
        Welcome to my little garden on the internet.
      </h4>
      <div className="w-full">
        <p className="text-3xl font-bold underline">Blog Posts</p>
        {metas.map((postMeta: BlogPostMeta) => {
          return (
            <div key={postMeta.slug} className="w-full">
              <Link href={`/blog/${postMeta.slug}`}>
                <a className="w-full">
                  <div className="mb-4 w-full">
                    <div className="flex flex-col md:flex-row justify-between">
                      <h4 className="text-lg md:text-xl font-medium mb-2  text-indigo-600 dark:text-indigo-400">
                        {postMeta.title}
                      </h4>
                      <time className="uppercase text-xs text-gray-400 dark:text-gray-400 font-bold">
                        {format(
                          parseISO(postMeta.publishedAt),
                          "MMMM dd, yyyy"
                        )}
                      </time>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {postMeta.summary}
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
  const metas = await getAllPostsMeta();

  return { props: { metas } };
}
