import { useState, useEffect, useMemo } from 'react';
import { GithubUser } from '../interfaces/user';
import { useDebounce } from './useDebounce';

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
  errorMessage: string | null;
}

export const useGitHubApi = (userName: string | undefined, delay = 2000): ApiResponse<GithubUser> => {
  const debouncedUserName = useDebounce(userName, delay);

  const url = useMemo(() => debouncedUserName ? `https://api.github.com/users/${debouncedUserName}` : null, [debouncedUserName]);
  const repoUrl = useMemo(() => debouncedUserName ? `https://api.github.com/users/${debouncedUserName}/repos` : null, [debouncedUserName]);

  const [data, setData] = useState<GithubUser | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!url && !repoUrl) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetch(url!);
        const response2 = await fetch(repoUrl!);
        if (!response.ok) {
          throw new Error(`User not found: ${debouncedUserName}`);
        }
        if (!response2.ok) {
          throw new Error('Failed to fetch user repositories');
        }
        const json = await response.json();
        const json2 = await response2.json();
        setData({ ...json, repos: json2 });
        setError(null);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
          setErrorMessage(error.message);
        } else {
          setError(new Error('An unknown error occurred'));
          setErrorMessage('An unknown error occurred');
        }
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, repoUrl]);

  return useMemo(() => ({ data, error, isLoading, errorMessage }), [data, error, isLoading, errorMessage]);
};
