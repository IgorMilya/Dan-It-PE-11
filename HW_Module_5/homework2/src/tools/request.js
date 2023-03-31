import axios from "axios";
import PropTypes from "prop-types";

export const request = async ({
  url,
  body
} = {}) => {
  axios.defaults.baseURL = "https://fakestoreapi.com/products";

  const fetchData = () => {
    return axios.get(url, { params: body });
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
