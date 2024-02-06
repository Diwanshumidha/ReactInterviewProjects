import { useEffect, useState } from "react";
import { ErrorConverter } from "./utils";

type Props<T> = {
  url: string;
  enabled?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (err: string) => void;
  onSettled?: () => void;
};

const useQuery = <T,>({
  url,
  enabled = true,
  onError,
  onSettled,
  onSuccess,
}: Props<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function To Fetch Data

  const fetchData = async () => {
    try {
      setIsLoading(true);
      console.log("Fetching");
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (!result) {
        throw new Error("Did Not Got any Data From Backend");
      }
      setData(result);
      if (onSuccess) onSuccess(result);
    } catch (e) {
      const StringifiedError = ErrorConverter(e);
      !!onError && onError(StringifiedError);
      setError(StringifiedError);
    } finally {
      setIsLoading(false);
      !!onSettled && onSettled();
    }
  };

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [url, enabled]);

  return {
    data,
    isLoading,
    isError: !!error,
    error,
    refetch: () => fetchData(),
  };
};

export default useQuery;
