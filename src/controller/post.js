// @ts-check

import { getTable } from "../firebase/db";

/**
 *
 * @param {string} collection
 * @returns
 */
export const fetch = async (collection) => {
  const response = getTable(collection);
  return response;
};

export const post = async () => {};
