import React, { useEffect } from "react";
import "./App.css";
import { useApi } from "../src/hooks/useApi";

type Response = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const { error, loading, request, response } = useApi<Response>();

  useEffect(() => {
    request({
      endpoint: "https://jsonplaceholder.typicode.com/posts/1",
      method: "GET",
    });
  }, [request]);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <header className="App-header">
          <p>Latest post: {response?.title}</p>
          <a
            className="App-link"
            href={`https://example.com/post/${response?.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </header>
      )}
    </div>
  );
}

export default App;
