/** @type {import('next').NextConfig} */

const processParser = () => {
  const result = {};
  Object.keys(process.env)
    .filter((item) => item.includes("REACT_APP"))
    .forEach((item) => (result[item] = process.env[item]));
  return result;
};

console.log(processParser());

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    nextScriptWorkers: true,
  },
  env: {
    ...processParser(),
  },
};

module.exports = nextConfig;
