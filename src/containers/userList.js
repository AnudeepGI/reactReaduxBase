import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectUser } from "../actions/index";

class UserList extends Component {
    createListItem() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}
                    onClick={() => this.props.selectUser(user)}>
                    {user.first}
                </li>
            );
        });
    }
    render() {
        return (
            <ul>
                {this.createListItem()}
            </ul>
        );
    }
}
//Pass state component
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

//Pass state component
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);