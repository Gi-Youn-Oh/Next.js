import { getRecentPosts } from "@/service/posts";
import PostsGrid from "./posts/PostsGrid";

export default async function RecentPosts() {
    const posts = await getRecentPosts();

    return <section className="my-4">
        <h2 className="text-2xl font-bold my-2">Recent Posts</h2>
        <PostsGrid posts={posts} />
    </section>
}