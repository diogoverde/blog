import React from "react";
import { GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx";
import { BlogPost } from "types/blogpost";
import MDXComponents from "@/components/MdxComponents";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

export default function PostPage({ meta, mdxSource }: BlogPost) {
  return (
    <Layout>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <Link href="/">
          <a className="text-indigo-600 dark:text-indigo-400 uppercase text-sm tracking-wide font-black">
            ← All posts
          </a>
        </Link>

        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {meta.title}
        </h1>
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
