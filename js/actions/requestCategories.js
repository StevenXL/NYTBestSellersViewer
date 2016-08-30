import categoriesFetched from './categoriesFetched';

const requestCategories = (dispatch) => {
  fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=25bbed0c29de425885f377d561c79bf7')
    .then(response =>
      response.json()
    )
    .then(responseJson =>
      dispatch(categoriesFetched(responseJson.results))
    )
    .catch(error =>
      console.warn(error)
    );
};

export default requestCategories;
