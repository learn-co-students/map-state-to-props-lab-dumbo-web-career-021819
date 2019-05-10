import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    // ^^ WOW! map((user, index)). I'm going to try to use that in the future
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          {this.props.users.map(user => {
            return <li>{user.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
