import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {loginUser, logoutUser} from '../../actions/authenticateActions';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    componentWillUpdate(nextProps){
        
    }
    render() {
        let userBar = this.props.authentication ? (
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Login</NavItem>
                <NavItem eventKey={2} href="#">Register</NavItem>
            </Nav>
        ) : (
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Login</NavItem>
                <NavItem eventKey={2} href="#">Register</NavItem>
            </Nav>
        );
        return (
            <Navbar>
                <Navbar.Brand>
                    <Link to="/">UserName Blog</Link>
                </Navbar.Brand>
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