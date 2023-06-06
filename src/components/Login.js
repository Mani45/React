import React, { Component } from "react";
import { Link } from "react-router-dom";
import { variables } from './Variables';
import { useNavigate } from "react-router-dom";

import {
    Container,
    Button,
    Row,
    Col,
    Form,
    FormControl
} from "react-bootstrap";

class Login extends Component {



    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onLoginClick = () => {
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        console.log("Login " + userData.username + " " + userData.password);
    };

    userLogin = () => {
        console.log('called');
        const navigate = useNavigate();
        fetch(variables.API_URL + 'login?username=' + this.state.username + '&password=' + this.state.password)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    //alert(JSON.stringify(data));
                    alert('User Found');
                    // this.props.navigate('/home');
                    navigate("/home");
                } else {
                    alert('User Not found!!');
                }

            })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="4">
                        <h1>Login</h1>
                        <Form>
                            <Form.Group controlId="usernameId">
                                <Form.Label>User name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="Enter user name"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <FormControl.Feedback type="invalid"></FormControl.Feedback>
                            </Form.Group>

                            <Form.Group controlId="passwordId">
                                <Form.Label>Your password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                        <Button color="primary" onClick={this.userLogin}>Login</Button>
                        <p className="mt-2">
                            Don't have account? <Link to="/signup">Signup</Link>
                        </p>
                    </Col>
                </Row>
            </Container >

        );
    }
}
export default Login;