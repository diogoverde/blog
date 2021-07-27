import React from "react";
import { parseISO, format } from "date-fns";
import { GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx";
import { BlogPost } from "types/blogpost";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "@/components/MdxComponents";
import Link from "next/link";

export default function PostPage({ meta, mdxSource }: BlogPost) {
  return (
    <Layout>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <Link href="/">
          <a className="text-indigo-600 dark:text-indigo-400 uppercase text-sm tracking-wide font-black">
            ← All posts
          </a>
        </Link>

        <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
          {meta.title}
        </h1>

        <div className="mt-2 mb-2">
          <time className="uppercase text-xs text-gray-500 font-bold">
            {format(parseISO(meta.publishedAt), "MMMM dd, yyyy")}
          </time>{" "}
          <span className="text-xs uppercase font-bold text-gray-500">
            • Written by{" "}
            <a
              className="uppercase text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
              href="https://twitter.com/diogo__verde"
            >
              Diogo Verde
            </a>
          </span>
        </div>

        <MDXRemote
          {...mdxSource}
          components={{
            ...MDXComponents,
          }}
        />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<BlogPost> = async (context) => {
  const slug = context.params?.slug as string;
  const post = await getPostBySlug(slug);

  return { props: post };
};

// required for dynamic SSG pages
export const getStaticPaths = () => {
  const posts = getAllPostsMeta();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths: paths,
    fallback: false,
  };
};
