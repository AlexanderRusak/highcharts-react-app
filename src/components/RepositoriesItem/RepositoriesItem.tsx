import { FC } from 'react';
import './RepositoriesItem.css'
import { Repository } from '../../interfaces/repository';
import { Pie } from '../Graphs/Pie';

export const RepositoriesItem: FC<Repository> = ({ default_branch, fork, forks, full_name, id, is_template, language, open_issues, visibility, watchers }): JSX.Element => {

  const data = [
    forks && {
      name: 'Forks',
      y: forks,
    },
    open_issues && {
      name: 'Open Issues',
      y: open_issues,
    },
    watchers && {
      name: 'Watchers',
      y: watchers,
    },
  ].filter(value => typeof value === 'object') as { name: string; y: number; }[];


  const options: any = {
    chart: {
      type: 'pie',
      width: 250,
      height: 190,
    },
    title: {
      text: full_name,
      style: {
        fontSize: '10px',
      },
    },
    series: [
      {
        name: 'Stats',
        data,
      },
    ],
  };

  return (
    <div className='repository-item__container'>
      <Pie options={options} />
    </div>
  );
}
