export interface Repository {
  id: number,
  full_name: string,
  visibility: string,
  language: string,
  watchers: number,
  is_template: boolean,
  forks: number,
  fork: boolean,
  default_branch: string,
  open_issues: number,
  name: string,
  archived: boolean,
  disabled: boolean
}

