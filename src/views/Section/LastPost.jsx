import { useEffect } from "react";

// services
import { fetchPosts } from "../../services/post";

const LastPost = () => {
  const init = async () => {
    try {
      const posts = await fetchPosts();
      console.log(posts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <div></div>;
};

export default LastPost;
