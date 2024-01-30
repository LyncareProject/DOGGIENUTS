import axios from "axios";

const SERVER_URL = "http://localhost:8080/api";

export const postEmail = ({
  name,
  phone,
  email,
  company,
  country,
  products,
}) => {
  return axios.post(SERVER_URL + "/email", {
    name,
    phone,
    email,
    company,
    country,
    products,
  });
};
