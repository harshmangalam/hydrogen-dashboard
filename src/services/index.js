import axios from "axios";

export const fetchUsers = async () => {
  return await axios.get("/users");
};


export const fetchPosts = async () => {
  return await axios.get("/posts");
};
