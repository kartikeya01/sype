import React from 'react';
import {StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import {numberFormat} from '../../../../common/numberFormatter';
import PropTypes from 'prop-types';
import AirbnbPropTypes from 'airbnb-prop-types';

export default class FollowingButton extends React.Component {
  constructor(props) {
    super(props);
  }

  /** When the following button is clicked ==>
   * It open's up the list of user's
   * that is linked to  the profile
   * ie, the array of following is passed.
   *  */

  onFollowingClicked = user => {
    console.log('Pressed Following Button of user ' + user);
    return 'This is the following list of ' + user;
  };

  render() {
    /** The user profile's followers */
    const username = this.props.username;

    /** Here, we just need the count of following,
     * which is created when we query the users.
     */
    let following_count = this.props.following_count;

    /** Cheat until we understand proptypes. Because we still need a way to handle string,bool,etc. */
    /** Worst case --> push in 0 for any type other than numeric. */
    /** According to Kartikeya's pull request(7) comment, we should set a miniumum to 0. */
    /** Also note, we should pass in this variable and not the prop if it violates the constraint */
    following_count =
      Number.isInteger(following_count) && following_count >= 0
        ? following_count
        : 0;

    return (
      <Chip
        style={styles.chip}
        onPress={() => this.onFollowingClicked(username)}>
        Following {numberFormat(following_count)}
      </Chip>
    );
  }
}

FollowingButton.propTypes = {
  username: PropTypes.string.isRequired,
  following_count: AirbnbPropTypes.nonNegativeInteger.isRequired,
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'white',
  },
});
