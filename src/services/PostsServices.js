import axios from "axios";
const baseUrl = "https://linked-posts.routemisr.com/";

export async function getAllPostsApi() {
  const { data } = await axios.get(baseUrl + "posts", {
    headers: {
      token: localStorage.getItem("token"),
    },
    params: {
      page: 27,
    },
  });
  return data;
}

export async function addPostsApi(formData) {
  const { data } = await axios.post(baseUrl + "posts", formData, {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  return data;
}

export async function getSinglePost(id) {
  try {
    const { data } = await axios.get(baseUrl + "posts/" + id, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}
