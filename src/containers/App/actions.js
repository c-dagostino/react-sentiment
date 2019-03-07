import { LOAD_REPOS_ERROR } from './constants';

export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error
  };
}
