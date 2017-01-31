import React from 'react';
import { connect } from 'react-redux';
import {browserHistory, Link} from 'react-router';
import classNames from 'classnames';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            email: '',
            password: '',
            confirm_password: '',
            password_match: false
        };
        this.previousPage = this.previousPage.bind(this);
    }
    componentDidMount(){
    }
    previousPage(){
        browserHistory.push('/');
    }
    render() {
        return (
            <div className="layout-middle">
                <div className="register-header"></div>
                <form className="register-form">
                    <input value={this.state.login} placeholder="Login"/>
                    <input value={this.state.email} placeholder="E-mail Address"/>
                    <input value={this.state.password} placeholder="Password" className={classNames(this.state.password_match ? '' : 'error')}/>
                    <input value={this.state.confirm_password} placeholder="Confirm Password" className={classNames(this.state.password_match ? '' : 'error')}/>
                    <button>Create a Free Account</button>
                    <Link to="">Already have an account?</Link>
                </form>
                <button onClick={this.previousPage} className="default-button post-return-button">
                    <i></i>
                    <span className="default-button-content">Return to Forum</span>
                </button>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        
    };
}

export default connect(mapStateToProps, {})(Register);