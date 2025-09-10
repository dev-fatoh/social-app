import { useState } from "react";
import { addPostsApi, getAllPostsApi } from "../services/PostsServices";
const CreatePost = () => {
  const [showForm, setShowForm] = useState(false);
  const [caption, setCaption] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  async function handleCreatePost(e) {
    e.preventDefault();
    if (caption.trim() == "" && imageFile == null) {
      return;
    }
    const formData = new FormData();
    if (caption) {
      formData.append("body", caption);
    }
    if (imageFile) {
      formData.append("image", imageFile);
    }
    const response = await addPostsApi(formData);
    console.log(response);
  }
  function handleFileInputChange(e) {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
      const imagePreview = URL.createObjectURL(e.target.files[0]);
      setImagePreview(imagePreview);
    }
  }
  return (
    <div className="p-1 my-6">
      {showForm ? (
        <>
          <form
            onSubmit={handleCreatePost}
            className="w-full flex flex-col text-gray-800 p-2"
          >
            <textarea
              autoFocus
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="description bg-gray-100 sec p-3 h-40 border rounded-2xl border-gray-300 outline-none"
              spellCheck="false"
              placeholder="what's in your mind ? ..."
            ></textarea>
            {imagePreview && (
              <div className="w-full relative mt-6">
                <img
                  src={imagePreview}
                  alt="preview"
                  className="w-full object-cover max-h-64 rounded-2xl"
                />
                <button
                  onClick={() => {
                    setImageFile(null);
                    setImagePreview("");
                  }}
                  type="button"
                  className="w-[30px] h-[30px] rounded-full bg-red-700 text-white absolute top-3 right-3  p-2 text-center flex items-center justify-center"
                >
                  <svg
                    fill="#ffffff"
                    viewBox="-3.5 0 19 19"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cf-icon-svg"
                  >
                    <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
                  </svg>
                </button>
              </div>
            )}
            <div className="buttons flex justify-between items-center mt-4">
              <label className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-75">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileInputChange}
                />
                <div className="flex items-center space-x-2">
                  <svg
                    viewBox="0 0 16 16"
                    width={27}
                    height={27}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    className="bi bi-file-image"
                  >
                    <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"></path>
                  </svg>
                  <span className="text-sm font-medium"> Photo</span>
                </div>
              </label>
              <button
                onClick={() => setShowForm(false)}
                className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
              >
                Cancel
              </button>
              <button
                disabled={caption.trim() == "" && imageFile == null}
                type="submit"
                className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
              >
                Post
              </button>
            </div>
          </form>
        </>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="block w-full cursor-pointer text-left text-gray-500 hover:text-gray-700 border-3 border-gray-200 rounded-lg p-4 mx-auto"
        >
          what's in your mind ? share post
        </button>
      )}
    </div>
  );
};

export default CreatePost;
