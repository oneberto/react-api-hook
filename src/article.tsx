import React, { useEffect } from "react";
import { useApi } from "./hooks/useApi";

const Article: React.FC = () => {
  const { error, loading, request, response } = useApi<Response>();

  useEffect(() => {
    request({
      endpoint: "https://jsonplaceholder.typicode.com/posts/1",
      method: "GET",
    });
  }, [request]);

  if (error) {
    return <p>ERROR!</p>;
  }

  if (loading) {
    return <p>Spinning...</p>;
  }

  return <div />;
};

export default Article;
