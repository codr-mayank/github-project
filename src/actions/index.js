import githubUserAPI from '../apis/github-user';
import history from '../history';

export const onInputChange = value => {
  return { type: 'INPUT_CHANGE', payload: value };
}

export const githubUser = value => async dispatch => {
  const response = await githubUserAPI.get(`/search/users?q=${value}&sort=repositories&order=desc`);

  dispatch({ type: 'GITHUB_USER', payload: response.data });
  history.push('/results');
}

export const resultsUnmount = () => {
  return {
    type: 'RESULTS_UNMOUNT'
  }
}