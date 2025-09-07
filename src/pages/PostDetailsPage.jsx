import { useParams } from "react-router-dom";
import { getSinglePost } from "../services/PostsServices";
import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function PostDetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  async function getPost() {
    const response = await getSinglePost(id);
    if (response.message == "success") {
      setPost(response.post);
    }
  }
  useEffect(() => {
    if (id) {
      getPost();
    }
  }, [id]);
  return (
    <div className="mx-auto w-full md:w-1/2">
      {post && <Post post={post} />}
    </div>
  );
}
