import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {loginUser, logoutUser} from '../../actions/authenticateActions';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import LoginForm from './LoginForm';


// alternative: https://github.com/facebook/react/issues/579#issuecomment-60841923
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showLoginForm: false
        };
        this.loginExpand = this.loginExpand.bind(this);
        this.loginCollapse = this.loginCollapse.bind(this);
    }
    loginExpand(){
        this.setState({showLoginForm: true});
    }
    loginCollapse(){
        this.setState({showLoginForm: false});
    }
    render() {
        let userBar = this.props.authentication ? (
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Login</NavItem>
                <NavItem eventKey={2} href="#">Register</NavItem>
            </Nav>
        ) : (
            <Nav pullRight>
                <NavItem eventKey={1} onClick={this.dropdownClickHandler}>
                    <div onClick={this.loginExpand}>Login</div>
                    <LoginForm show={this.state.showLoginForm} hide={this.loginCollapse}/>
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
};

function mapStateToProps(state, ownProps){
    return {
        authentication: state.authericationReducer
    };
}
export default connect(mapStateToProps, {loginUser, logoutUser})(Header);