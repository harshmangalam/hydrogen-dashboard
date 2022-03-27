import axios from "axios";

export const fetchUsers = async () => {
  return await axios.get("/users");
};
