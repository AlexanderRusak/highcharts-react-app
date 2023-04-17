import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useGitHubApi } from '../hooks/useGitHubApi';
import { Input } from '../components/Input/Input';
import { useDebounce } from '../hooks/useDebounce';
import './MainPage.css';
import { RepositoriesItem } from '../components/RepositoriesItem/RepositoriesItem';
import { Link, useLocation } from 'react-router-dom';
import { UserComponent } from '../components/UserComponent/UserComponent';
import { NavBar } from '../components/NavBar/NavBar';
import { Loader } from '../components/Loader/Loader';

export const MainPage: React.FC = (): JSX.Element => {
  const { state } = useLocation();

  useEffect(() => {
    if (state && state.username) {
      setUserName(state.username)
    }
  }, [])

  const [userName, setUserName] = useState('');
  const debouncedUserName = useDebounce(userName, 500);
  const { data, isLoading, error, errorMessage } = useGitHubApi(debouncedUserName);

  const handleUserNameChange = useCallback((value: string) => {
    setUserName(value);
  }, []);

  const repositories = useMemo(() => {
    if (data && data.repos.length) {
      return data.repos.map((repo) => (
        <Link key={repo.id} to={`/repo/${repo.id}`} state={{ repo }}>
          <RepositoriesItem {...repo} />
        </Link>
      ));
    }
    return null;
  }, [data?.repos]);

  const userComponent = useMemo(() => {
    return data ? <UserComponent data={data} /> : null;
  }, [data]);

  return (
    <>
      <NavBar />
      <div className='container-mainpage'>
        <Input title="GitHub User Name" onChange={handleUserNameChange} value={userName} />
        {isLoading ? <Loader /> : (
          <>
            {error ? (
              <div className="error-message">Error: {errorMessage}</div>
            ) : (
              <>
                <div className='container-userComponent'>
                  {userComponent}
                </div>
                <div className='container-repositories'>
                  {repositories}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
