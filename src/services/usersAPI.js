import axios from "axios";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

export const token = {
  set(token) {
    axios.defaults.headers.common.Token = `${token}`;
  },
};

export const fetchToken = async () => {
  const { data } = await axios.get("/token");
  token.set(data.token);
  return data;
};

export const fetchUsers = async ({ page }) => {
  const { data } = await axios.get(`/users?page=${page}&count=6`);
  return data;
};

export const postUser = async (formData) => {
  const { data } = await axios.post("/users", formData);
  return data;
};

export const fetchPositions = async () => {
  const { data } = await axios.get("/positions");
  return data;
};

export const fetchUserInfo = async (id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};
