import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type BlogPostMeta = {
  title: string;
  publishedAt: string;
  description: string;
  slug?: any;
  image?: string;
  summary?: string;
  by?: string;
  avatar?: string;
};

export type BlogPost = {
  meta: BlogPostMeta;
  mdxSource: MDXRemoteSerializeResult;
};
