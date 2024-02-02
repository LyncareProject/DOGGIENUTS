import axios from "axios";
import SERVER_URL from "./apiConfig";

export const postEmail = ({
  name,
  phone,
  email,
  company,
  country,
  selectItems,
  sample,
  products,
}) => {
  return axios.post(`${SERVER_URL}/email`, {
    name,
    phone,
    email,
    company,
    country,
    selectItems,
    sample,
    products,
  });
};

export const postEmailZhCht = ({
  name,
  phone,
  email,
  company,
  country,
  selectItems,
  sample,
  products,
}) => {
  return axios.post(`${SERVER_URL}/emailZhCht`, {
    name,
    phone,
    email,
    company,
    country,
    selectItems,
    sample,
    products,
  });
};
