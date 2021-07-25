import { Layout } from "@/components/Layout";
import { getAllPostsMeta } from "@/lib/mdx";
import Link from "next/link";
import { BlogPostMeta } from "types/blogpost";

export default function Blog({ posts }: any) {
  return (
    <Layout>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Blog Page
      </h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nihil
        nam explicabo beatae expedita temporibus incidunt eos, id numquam
        similique repellendus ab quae quas tenetur ut reiciendis illo provident
        dolores.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus
        facere sint voluptatum ipsum maxime, numquam, architecto vel, pariatur
        enim suscipit unde nemo quis repellendus odio magni maiores nostrum
        dignissimos!
      </p>
      <div className="mt-2">
        <span className="text-2xl font-bold underline">
          There are <span className="text-blue-400">{posts.length}</span> posts
        </span>
        {posts.map((post: BlogPostMeta) => {
          return (
            <Link key={post.title} href={`/blog/${post.slug}`}>
              <a className="w-full">
                <div className="mb-8 w-full">
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
