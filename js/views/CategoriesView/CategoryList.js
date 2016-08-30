import React, { PropTypes } from 'react';
import humps from 'humps';
import { View, ListView } from 'react-native';
import Category from './Category';
import styles from '../../common/styles';

const CategoryList = ({ categories, navigator, onCategoryClick }) => {
  const camelizedCategories = humps.camelizeKeys(categories);
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const data = ds.cloneWithRows(camelizedCategories);

  return (
    <View style={styles.backgroundColorDefault}>
      <ListView
        dataSource={data}
        enableEmptySections
        renderRow={(category) =>
          <Category
            {...category}
            onCategoryClick={() => {
              navigator.push({ id: 'CategoryView' });
              onCategoryClick(category.listNameEncoded);
            }}
          />
          }
        style={[styles.marginTopTwenty, styles.marginLeftTen]}
      />
    </View>

  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      display_name: PropTypes.string.isRequired,
      list_name: PropTypes.string.isRequired,
      list_name_encoded: PropTypes.string.isRequired,
    })
  ),
  navigator: PropTypes.object.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default CategoryList;
