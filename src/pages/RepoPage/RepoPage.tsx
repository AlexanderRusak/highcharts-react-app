import { useLocation, useNavigate } from 'react-router-dom';
import { Repository } from '../../interfaces/repository';
import { useMemo } from 'react';
import './RepoPage.css';

export const RepoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { repo } = location.state;
  const { language, open_issues, forks, watchers, is_template, archived, disabled, fork, full_name } = repo as Repository;

  const navigateBackHandler = () => {
    navigate('/', { state: { username: repo.owner.login } })
  };

  const labelsComponent = useMemo(() => {
    if (!is_template && !archived && !disabled && !fork) {
      return null;
    }

    return (
      <div className='container-label'>
        {is_template && <span className='label-template'>Template</span>}
        {archived && <span className='label-archived'>Archived</span>}
        {disabled && <span className='label-disabled'>Disabled</span>}
        {fork && <span className='label-fork'>Fork</span>}
      </div>
    );
  }, [is_template, archived, disabled, fork]);

  return (
    <div className='container'>
      <div className='goback' onClick={navigateBackHandler}>
        <span>&lt; Go Back</span>
      </div>
      <div className='container-repoInfo'>
        {labelsComponent}
        <h1 className='repo-name'>{full_name}</h1>
        <div className='repo-language'>
          {language && <span>Language: {language}</span>}
        </div>
        <hr />
        <div className='stats'>
          <span>Open Issues: {open_issues}</span>
          <span>Forks: {forks}</span>
          <span>Watchers: {watchers}</span>
        </div>
      </div>
    </div>
  );
};