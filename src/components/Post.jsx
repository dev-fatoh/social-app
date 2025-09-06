import PostBody from "./post/PostBody";
import PostFooter from "./post/PostFooter";
import PostHeader from "./post/PostHeader";

const Post = ({ post }) => {
  return (
    <div className="bg-white w-full rounded-md shadow-md h-auto py-3 px-3 my-5">
      <PostHeader
        avatar={post.user.photo}
        user={post.user.name}
        date={post.createdAt}
      />
      {/* post body */}
      <PostBody
        caption={post.body}
        image={post.image}
        commentsLength={post.comments.length}
      />
      <PostFooter />
    </div>
  );
};

export default Post;
