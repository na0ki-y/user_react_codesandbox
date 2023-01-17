import { useParams } from "react-router-dom";

export const Post = () => {
  let params = useParams();

  return <h1>UrlでParmsをうけっとた {params.postId}</h1>;
};
