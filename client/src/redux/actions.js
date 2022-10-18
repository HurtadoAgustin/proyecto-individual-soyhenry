export const SOMETHING = 'SOMETHING';

const API_PATH = 'http://localhost:3001';

export const getSomething = () =>
  dispatch =>
    fetch(`${API_PATH}`)
      .then(response => response.json())
      .then(json => dispatch({
        type: SOMETHING,
        payload: json
}));