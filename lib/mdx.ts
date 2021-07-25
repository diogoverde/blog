import fs from "fs";
import glob from "glob";
import matter from "gray-matter";
import path from "path";
import { BlogPostMeta } from "types/blogpost";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();
const POSTS_PATH = path.join(root, "data", "blog");

export const getAllPostsMeta = () => {
  const paths = glob.sync(`${POSTS_PATH}/**/*.mdx`);

  return paths.map((filePath: string): BlogPostMeta => {
    const src = fs.readFileSync(path.join(filePath), "utf8");

    const slug = path.basename(filePath).replace(".mdx", "");
    // Use gray-matter to extract the post meta from post content
    const data = matter(src).data as BlogPostMeta;

    return {
      ...data,
      slug,
    };
  });
};

export const getPostBySlug = async (slug: string) => {
  const src = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), "utf8");
  const { data, content } = matter(src);

  const mdxSource = await serialize(content);

  // const { code, frontmatter } = await bundleMDX(src, {
  //   xdmOptions(options) {
  //     options.remarkPlugins = [
  //       ...(options?.remarkPlugins ?? []),
  //       slugPlugin,
  //       gfmPlugin,
  //     ];

  //     return options;
  //   },
  // });

  const meta = {
    ...data,
    slug,
  } as BlogPostMeta;

  return {
    meta,
    mdxSource,
  };
};
