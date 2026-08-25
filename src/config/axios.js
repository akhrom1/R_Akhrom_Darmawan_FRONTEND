import axios from "axios";

const customAPI = axios.create({
  baseURL: "/api/dummy",
});

export default customAPI;
