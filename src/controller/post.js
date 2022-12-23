// @ts-check

import { getValue } from "../services/post";

/**
 *
 * @param {string} collection
 * @returns
 */
export const fetch = async (collection) => {
  const response = await getValue("users", 1);
  return response;
};

export const post = async () => {};
