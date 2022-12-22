import { useEffect } from "react";

// services
import { fetch } from "../../controller/post";

const Post = () => {
  const init = async () => {
    try {
      const response = await fetch("claudia");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <div></div>;
};

export default Post;
