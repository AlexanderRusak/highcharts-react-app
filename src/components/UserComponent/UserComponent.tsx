import { FC } from 'react'
import { GithubUser } from '../../interfaces/user'
import './UserComponent.css'
import { Bar } from '../Graphs/Bar'
import { option } from './options'

interface UserComponentProps {
  data: GithubUser
}


export const UserComponent: FC<UserComponentProps> = ({ data }) => {

  const { public_repos, public_gists, name, login, repos } = data;

  return <div className='container-user'>
    <div className='user-info'>
      <img src={data.avatar_url} alt="user-name-avatar" />
      <div className='user-names'>
        <span>Name: {name}</span>
        <span>Nickname: {login}</span>
        <a href={data.url}>See GitHub Profile</a>
      </div>
    </div>
    <div className='container-bar'>
      <Bar options={option(name!, public_repos, public_gists, repos.length)} />
    </div>
  </div>

}