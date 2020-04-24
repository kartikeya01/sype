import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Caption} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export default class CommentsTouchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCommentClick = () => {};

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => console.log('go to view comments')}>
        <Caption style={styles.captionStyle}>
          View All {this.props.commentsLength} Comment
          {this.props.commentsLength <= 1 ? '' : 's'}
        </Caption>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  captionStyle: {
    fontSize: 14,
  },
});
