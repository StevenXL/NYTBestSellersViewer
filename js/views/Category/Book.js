import React from 'react';
import { Text } from 'react-native';

const Book = ({ title }) => <Text>{title}</Text>;

Book.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Book;
