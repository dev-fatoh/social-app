import axios from "axios";
const baseUrl = "https://linked-posts.routemisr.com/";

export async function getAllPostsApi() {
  try {
    const { data } = await axios.get(baseUrl + "posts", {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
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
// getSinglePost("68b2174022204da515b7221f");
