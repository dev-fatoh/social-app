import { useEffect, useState } from "react";
import { getAllPostsApi } from "../services/PostsServices";
import LoadingScreen from "./LoadingScreen";
import Post from "../components/Post.jsx";

export default function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function getPosts() {
    const { posts, message } = await getAllPostsApi();
    setIsLoading(false);
    if (message == "success") {
      setPosts(posts);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="grid gap-3 max-w-4xl mx-auto">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
}
