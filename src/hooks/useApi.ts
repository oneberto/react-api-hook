import { useCallback, useState } from "react";

export type RequestParams = {
  endpoint: string;
  method: string;
};

export const useApi = <T = any>() => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<T>();

  const request = useCallback(async (params: RequestParams) => {
    try {
      setLoading(true);

      const response = await fetch(params.endpoint, {
        method: params.method,
      });

      const data = await response.json();

      if (!data) {
        throw new Error();
      }

      setResponse(data);

      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { request, response, loading, error };
};
