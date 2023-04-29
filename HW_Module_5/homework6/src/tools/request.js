import axios from "axios";
import PropTypes from "prop-types";

export const request = async ({ url, method = "GET", body, headers } = {}) => {
  const token = window.localStorage.getItem("token");
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.headers.post["Content-Type"] = "application/json";

  if (!!token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common["Authorization"] = ``;
  }
  const fetchData = () => {
    if (method === "GET") return axios.get(url);
    else return axios({ url, method, data: body, headers });
  };

  try {
    const { data, status } = await fetchData();
    return { res: data, status };
  } catch ({ response }) {
    return { err: response };
  }
};

request.propTypes = {
  url: PropTypes.string.isRequired,
};

