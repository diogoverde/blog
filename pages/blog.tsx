import { Layout } from "../components/Layout";
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Blog({ posts }: any) {
  return (
    <Layout>
      Blog Page
      <p>There are {posts.length} posts</p>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
