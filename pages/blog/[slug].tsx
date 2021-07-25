import React from "react";
import { GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx";
import { BlogPost } from "types/blogpost";
import MDXComponents from "@/components/MdxComponents";
import { MDXRemote } from "next-mdx-remote";

export default function PostPage({ meta, mdxSource }: BlogPost) {
  return (
    <Layout>
      {/* <Component components={MDXComponents as any} /> */}
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents,
        }}
      />
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
