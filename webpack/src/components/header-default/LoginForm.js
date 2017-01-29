import React from 'react';
import { connect } from 'react-redux';
import {loginUser} from '../../actions/authenticateActions';
import {Modal, Button, FormControl, ControlLabel, HelpBlock, FormGroup} from 'react-bootstrap';
import {signInRequest} from '../../api/users';


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.signIn = this.signIn.bind(this);
        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.onHide = this.onHide.bind(this);
        this.handleEscKey = this.handleEscKey.bind(this);
        this.state = {
            loginValue: '',
            pwd: '',
            ajax_call: false,
            loginError: false
        }
    }
    componentDidMount(){
        document.addEventListener('keydown', this.handleEscKey, false);
    }
    signIn(){
        this.setState({ajax_call: true});
        signInRequest(this.state.loginValue,this.state.pwd).then((res)=>{
            if(res.err){
                this.setState({
                    pwd: '',
                    ajax_call: false,
                    loginError: 'Login or password is incorrect!'
                });
            }else{
                this.setState({
                    pwd: '',
                    ajax_call: false,
                    loginError: false
                });
                this.props.loginUser(this.state.loginValue);
                this.onHide();
            }
        })
    }
    loginChange(e){
        this.setState({ loginValue: e.target.value });
    }
    passwordChange(e){
        this.setState({ pwd: e.target.value });
    }
    onHide(){
        this.props.hide();
    }
    handleEscKey(event){
        if(!this.props.show){
            return;
        }
        if(event.keyCode == 27){
            this.onHide();
        }else if(event.keyCode == 13){
            this.signIn();
        }
    }
    render() {
        const rest = Object.assign({}, this.props);
        delete rest.authentication;
        delete rest.loginUser;
        delete rest.hide;
        return (
            <Modal {...rest} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton onHide={this.onHide}>
                    <Modal.Title id="contained-modal-title-lg"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.state.loginError ? 'error' : null}
                        >
                            <ControlLabel>Sign in to continue</ControlLabel>
                            <FormControl disabled={this.state.ajax_call}
                                type="text"
                                value={this.state.loginValue}
                                placeholder="Login"
                                onChange={this.loginChange}
                            />
                            <FormControl disabled={this.state.ajax_call}
                                type="password"
                                value={this.state.pwd}
                                placeholder="Password"
                                onChange={this.passwordChange}
                            />
                            <FormControl.Feedback />
                            <HelpBlock>{this.state.loginError}</HelpBlock>
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.signIn} disabled={this.state.ajax_call} bsStyle="primary">Login</Button>
                    <Button onClick={this.onHide}>Close</Button>
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