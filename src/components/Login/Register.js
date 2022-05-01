import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import * as UsersService from "../../services/users-service"
import {Button, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {createSession} from "../../actions/session-actions";

const Register = () => {
    const [registrationState, setRegistrationState] = useState({
        username: "",
        password: "",
        "password-repeat": ""});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const attemptRegister = () => {

        if (!registrationState["username"]) {
            setErrorState("Username field is required.");
            return;
        } else if (!registrationState["password"]) {
            setErrorState("Password field is required.");
            return;
        }

        if (registrationState["password"] !== registrationState["password-repeat"]) {
            setErrorState("Repeat password does not match.");
            return;
        }

        UsersService.registerUser({
            "username": registrationState["username"],
            "password": registrationState["password"]
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
        setRegistrationState({
            ...registrationState,
            "error": error
        });
    }

    const clearErrorState = () => {
        setRegistrationState({
            ...registrationState,
            "error": false
        });
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-center">Register</h3>
                        <p className="card-text">Please enter a username and password for your account.</p>
                        <hr/>
                        <form>
                            <div className="form-group">
                                <label className="form-label" htmlFor="username-input">Username</label>
                                <input type="text" id="username-input" className="form-control form-control-lg"
                                       value={registrationState["username"]}
                                       onChange={(event) => setRegistrationState({
                                           ...registrationState,
                                           "username": event.target.value
                                       })}/>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="password-input">Password</label>
                                <input type="password" id="password-input" className="form-control form-control-lg"
                                       value={registrationState["password"]}
                                       onChange={(event) => setRegistrationState({
                                            ...registrationState,
                                            "password": event.target.value
                                       })}/>

                                <label className="form-label" htmlFor="password-repeat-input">Repeat Password</label>
                                <input type="password" id="password-repeat-input" className="form-control form-control-lg"
                                       value={registrationState["password-repeat"]}
                                       onChange={(event) => setRegistrationState({
                                           ...registrationState,
                                           "password-repeat": event.target.value
                                       })}/>
                            </div>

                            <div className="form-group text-center mt-2">
                                <button type="button" className="btn btn-primary" onClick={attemptRegister}>Register</button>
                                <p className="mt-2">Already have an account? <Link to="/login">Login!</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Modal show={registrationState["error"]} onHide={clearErrorState}>
                <Modal.Header>
                    <Modal.Title>Registration Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{registrationState["error"]}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={clearErrorState}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Register;