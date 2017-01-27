import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {loginUser} from '../../actions/authenticateActions';
import {Modal, Button, FormControl, ControlLabel, HelpBlock, FormGroup} from 'react-bootstrap';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.signIn = this.signIn.bind(this);
        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.state = {
            loginValue: '',
            pwd: ''
        }
    }
    signIn(){
        
    }
    loginChange(e){
        this.setState({ loginValue: e.target.value });
    }
    passwordChange(e){
        this.setState({ pwd: e.target.value });
    }
    render() {
        const rest = Object.assign({}, this.props);
        delete rest.authentication;
        delete rest.loginUser;
        delete rest.hide;
        return (
            <Modal {...rest} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                            //validationState={this.getValidationState()}
                        >
                            <ControlLabel>Sign in to continue</ControlLabel>
                            <div>
                                <input
                                type="text"
                                value={this.state.loginValue}
                                placeholder="Login"
                                onChange={this.loginChange}/>
                            </div>
                            <div>
                                <input
                                    type="password"
                                    value={this.state.pwd}
                                    placeholder="Password"
                                    onChange={this.passwordChange}/>
                            </div>
                            <FormControl.Feedback />
                            <HelpBlock>Validation is based on string length.</HelpBlock>
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.hide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

function mapStateToProps(state, ownProps){
    return {
        authentication: state.authericationReducer
    };
}
export default connect(mapStateToProps, {loginUser})(LoginForm);