import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    console.log(this)
    return (
      <div>
        {this.props.userCount}
        <ul>
        {this.props.users.map(user => <li> {user.username}</li>)} Users!
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger
  // console.log(state)
  return {
    users: state.users,
    userCount: state.users.length,
  }
}



export default connect(mapStateToProps)(Users)
