import categoryFetched from './categoryFetched';
import moment from 'moment';

const requestCategory = (listNameEncoded) =>
  (dispatch) => {
    const date = moment().format('YYYY-MM-DD').toString();
    fetch(`https://api.nytimes.com/svc/books/v3/lists/${date}/${listNameEncoded}.json?api-key=25bbed0c29de425885f377d561c79bf7`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(categoryFetched(listNameEncoded, responseJson));
      })
      .catch((error) => console.warn(error));
  };

export default requestCategory;
