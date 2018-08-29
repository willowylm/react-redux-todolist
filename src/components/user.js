import React, { Component } from 'react';
import { connect } from 'react-redux'


class user extends Component {
  render() {
      console.log(this.props.name)
    return (
      <div>
          <p>{this.props.name}</p>
      </div>
    );
  }
}

// User.propTypes = {
//     user: PropTypes.array.isRequired,
//   }
const mapStateToProps = state => {
    console.log(state)
    return {
      name: state.users.name
    }
  }
export default connect(mapStateToProps)(user)
