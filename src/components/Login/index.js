import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import * as UsersService from "../../services/users-service";
import {createSession} from "../../actions/session-actions";
import {useDispatch} from "react-redux";

const Login = () => {
    const [loginState, setLoginState] = useState({username: "", password: ""});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const attemptLogin = () => {
        if (!loginState["username"]) {
            setErrorState("Username field is required.");
            return;
        } else if (!loginState["password"]) {
            setErrorState("Password field is required.");
            return;
        }

        UsersService.loginUser({
            "username": loginState["username"],
            "password": loginState["password"]
        }).then((result) => {
            if (result["error"]) {
                setErrorState(result["error"]);
            } else {
                navigate("/");
                dispatch(createSession(result));
            }
        });
    };

    const setErrorState = (error) => {
        setLoginState({
            ...loginState,
            "error": error
        });
    }

    const clearErrorState = () => {
        setLoginState({
            ...loginState,
            "error": false
        });
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-center">Login</h3>
                        <p className="card-text">Please enter your username and password to login.</p>
                        <hr/>
                        <form>
                            <div className="form-group">
                                <label className="form-label" htmlFor="username-input">Username</label>
                                <input type="text" id="username-input" className="form-control form-control-lg"
                                    value={loginState["username"]}
                                    onChange={(event) => setLoginState({
                                       ...loginState,
                                       "username": event.target.value
                                    })}/>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="password-input">Password</label>
                                <input type="password" id="password-input" className="form-control form-control-lg"
                                   value={loginState["password"]}
                                   onChange={(event) => setLoginState({
                                       ...loginState,
                                       "password": event.target.value
                                   })}/>
                            </div>

                            <div className="form-group text-center mt-2">
                                <button type="button" className="btn btn-primary" onClick={attemptLogin}>Login</button>
                                <p className="mt-2">Don't have an account? <Link to="/register">Register!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Modal show={loginState["error"]} onHide={clearErrorState}>
                <Modal.Header>
                    <Modal.Title>Login Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{loginState["error"]}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={clearErrorState}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Login;