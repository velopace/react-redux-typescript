// use-api.js
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const useApi = (url, callbackFunction, options?: UseApiOptionsType) => {
  const { getAccessTokenSilently } = useAuth0();
  const [state, setState] = useState<UseApiRequestStateType>({
    loading: true,
  });
  const [refreshIndex, setRefreshIndex] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const { audience, scope, body, ...fetchOptions } = options ?? {};
        const accessToken = await getAccessTokenSilently({ audience, scope });
        const res = await fetch(url, {
          ...fetchOptions,
          method: fetchOptions?.method ?? "GET",
          body: JSON.stringify(body),
          headers: {
            ...fetchOptions.headers,
            // Add the Authorization header to the existing headers
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await res.json();
        setState({
          ...state,
          data: data ? JSON.stringify(data) : undefined,
          error: undefined,
          loading: false,
        });

        callbackFunction(data, body);
      } catch (error) {
        setState({
          ...state,
          error,
          loading: false,
        });
      }
    })();
  }, [refreshIndex]);

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1),
  };
};

export interface UseApiOptionsType extends RequestInit {
  audience?: string;
  scope?: string;
  body?: any;
}

export interface UseApiRequestStateType {
  error?: string;
  loading: boolean;
  data?: string;
}
