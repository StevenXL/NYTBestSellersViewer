import categoryFetched from './categoryFetched';

const requestCategory = (listNameEncoded) =>
  (dispatch) => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/2016-08-01/${listNameEncoded}.json?api-key=25bbed0c29de425885f377d561c79bf7`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(categoryFetched(listNameEncoded, responseJson));
      })
      .catch((error) => console.warn(error));
  };

export default requestCategory;
