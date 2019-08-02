import React, { Component } from 'react';
import { connect } from "react-redux";

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (
                <h2>Select a user.....</h2>
            )
        }

        return (
            <div>
                <h1>{this.props.user.age}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);