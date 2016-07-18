import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as actions from '../actions/';
import {bindActionCreators} from 'redux';
import * as types from '../constants/actionTypes';

class UserCreate extends React.Component {
    
    constructor(props) {
     super(props);

     this.state = {list:[]};
     this.render = this.render.bind(this);
     this.addNewUser = this.addNewUser.bind(this);
    }

    render() {
        var self = this;
        return (
                <div>
                    <div>Name: <input type="text" id="name"/></div>
                    <div>Email: <input type="text" id="email"/></div>
                    <button onClick={self.addNewUser}>Create User</button>
                </div>
        );
    }
    
    addNewUser () {
        var tmpState = this.state.list;
        var user = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value
        };
        
        tmpState.push(user);
        this.props.actions.addUser(tmpState);
    }
}

function mapStateToProps(state) {
    console.log(arguments);
    return { list: state };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCreate);