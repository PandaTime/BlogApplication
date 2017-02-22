import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {loginUser, logoutUser} from '../../actions/authenticateActions';
import {loginFormVisibilityAction} from '../../actions/visibilityActions'
import {verificationCheck, signOutRequest} from '../../api/users';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import LoginForm from './LoginForm';

// alternative: https://github.com/facebook/react/issues/579#issuecomment-60841923
// Will change it(gonna get rid from bootstrap)
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.loginExpand = this.loginExpand.bind(this);
        this.loginCollapse = this.loginCollapse.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    loginExpand() {
        this.props.loginFormVisibilityAction(true);
    }
    loginCollapse() {
        this.props.loginFormVisibilityAction(false);
    }
    logOut() {
        signOutRequest().then(()=>{
            this.props.logoutUser();
        })
    }
    componentDidMount() {
        // checking if we have valid token for autherization
        verificationCheck().then((res)=>{
            if (res.authorized) {
                this.props.loginUser(res.username);
            }
        })
    }
    render() {
        let userBar = this.props.authentication ? (
            <Nav pullRight={true}>
                <NavItem eventKey={1} onClick={this.logOut}>Log Out</NavItem>
            </Nav>
        ) : (
            <Nav pullRight={true}>
                <NavItem eventKey={1} onClick={this.loginExpand}>
                    <div>Login</div>
                    <LoginForm show={this.props.showLoginForm} hide={this.loginCollapse}/>
                </NavItem>
                <NavItem eventKey={2} href="#">Register</NavItem>
            </Nav>
        );
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">UserName Blog</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {userBar}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        authentication: state.authericationReducer,
        showLoginForm: state.loginFormVisibilityReducer,
    };
}
export default connect(mapStateToProps, {loginUser, logoutUser, loginFormVisibilityAction})(Header);
