import { Grid } from "@once-ui-system/core";
import Post from "./Post";
import { posts as externalPosts } from "@/resources";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
}

/**
 * Renders blog cards from the external posts list defined in src/resources/content.tsx.
 * No fs / MDX reading — safe for client/server usage.
 */
export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
}: PostsProps) {
  let allBlogs = externalPosts.slice();

  if (exclude.length) {
    allBlogs = allBlogs.filter((post: any) => !exclude.includes(post.slug));
  }

  const sortedBlogs = allBlogs.sort((a: any, b: any) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedBlogs.length
      )
    : sortedBlogs;

  const keyFor = (post: any, index: number) =>
    post.slug ||
    post.metadata?.externalUrl ||
    post.metadata?.title ||
    String(index);

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid
          columns={columns}
          s={{ columns: 1 }}
          fillWidth
          marginBottom="40"
          gap="16"
        >
          {displayedBlogs.map((post: any, i: number) => (
            <Post
              key={keyFor(post, i)}
              post={post}
              thumbnail={thumbnail}
              direction={direction}
            />
          ))}
        </Grid>
      )}
    </>
  );
}

export default Posts;
