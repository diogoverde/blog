import fs from "fs";
import matter from "gray-matter";
import path from "path";

const root = process.cwd();

export async function getAllFilesFrontMatter(type: string) {
  const filePath = path.join(root, "data", type);
  const files = fs.readdirSync(filePath);

  return files.reduce((allPosts: any[], postSlug: string) => {
    const source = fs.readFileSync(path.join(filePath, postSlug), "utf-8");

    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
