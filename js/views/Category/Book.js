import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../../common/styles';

const Book = ({ author, bookImage, description, title }) => {
  let modifiedDescription =
    description.length <= 140
      ? description
      : `${description.slice(0, 138)}...`;

  return (
    <View
      style={[
        styles.flexDirectionRow,
        styles.flexOne,
        styles.marginBottomFive,
      ]}
    >
      <Image source={{ uri: bookImage }} style={{ height: 100, width: 60 }} />
      <View style={[styles.flexOne, styles.marginLeftTwo]}>
        <Text style={[styles.flexOne]}>
          {title}
        </Text>
        <Text style={[styles.flexOne]}>
          By {author}
        </Text>
        <Text style={[styles.flexFour, styles.marginTopTwo]}>
          {modifiedDescription}
        </Text>
      </View>
    </View>
  );
};

Book.propTypes = {
  author: React.PropTypes.string.isRequired,
  bookImage: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Book;
