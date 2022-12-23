import { useEffect } from "react";

// services
import { fetch } from "../../controller/post";
import { insertValue } from "../../services/post";

const Post = () => {
  const init = async () => {
    try {
      const response = await fetch("claudia");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const test = async () => {
    try {
      const response = await insertValue();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <button onClick={() => test()}>hola</button>
    </div>
  );
};

export default Post;
