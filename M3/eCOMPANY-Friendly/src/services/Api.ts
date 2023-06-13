import axios from "axios";

const Api = axios.create({
  baseURL: "https://json-server-ecompany.herokuapp.com/",
  timeout: 5000,
});

export default Api;
