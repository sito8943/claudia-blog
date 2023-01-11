// @ts-check

import axios from "axios";
import { getAuth } from "../auth/auth";
import config from "../config";

// functions
import { getCookie } from "../utils/auth";

/**
 *
 * @param {string} user
 * @param {string} orderBy
 * @param {number} page
 * @param {number} count
 */
export const fetchPosts = async (
  user = "",
  orderBy = "date",
  page = 1,
  count = 25
) => {
  const response = await axios.post(
    `${config.apiUrl}blog/fetch-posts`,
    {
      user,
      orderBy,
      page,
      count,
      cookie: getCookie(config.acceptCookie),
    },
    { headers: getAuth }
  );
  const data = await response.data;
  return data;
};
