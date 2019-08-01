import React, { Component } from 'react';
import { connect } from "react-redux";

class UserDetails extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                {/* <h1>{this.props.activeUser.age}</h1> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        users: state.activeUsers
    };
}

export default connect(mapStateToProps)(UserDetails);