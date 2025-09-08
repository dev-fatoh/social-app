import { getAllPostsApi } from "../services/PostsServices";
import LoadingScreen from "./LoadingScreen";
import Post from "../components/Post.jsx";
import { useQuery } from "@tanstack/react-query";

export default function FeedPage() {
  const { isPending, data, status, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPostsApi,
  });
  // const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // async function getPosts() {
  //   const { posts, message } = await getAllPostsApi();
  //   setIsLoading(false);
  //   if (message == "success") {
  //     setPosts(posts);
  //   }
  // }
  //
  // useEffect(() => {
  //   getPosts();
  // }, []);
  if (status == "error") {
    return (
      <div className="flex items-center justify-center p-4 rounded-2xl bg-red-100 m-10 w-1/2 mx-auto border-red-600 border-5">
        <span className="text-red-700 text-3xl font-bold">{error.message}</span>
      </div>
    );
  }
  if (status == "pending") {
    return <LoadingScreen />;
  }
  return (
    <div className="grid gap-3 max-w-4xl mx-auto">
      {data.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
