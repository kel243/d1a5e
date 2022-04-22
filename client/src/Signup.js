import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthLayout from "./components/AuthPages/AuthLayout";
import AuthSwitcher from "./components/AuthPages/AuthSwitcher";
import AuthForm from "./components/AuthPages/AuthForm";

const Signup = ({ user, register }) => {
    const history = useHistory();

    const [formErrorMessage, setFormErrorMessage] = useState({});

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formElements = form.elements;
        const username = formElements.username.value;
        const email = formElements.email.value;
        const password = formElements.password.value;
        const confirmPassword = formElements.confirmPassword.value;

        if (password !== confirmPassword) {
            setFormErrorMessage({ confirmPassword: "Passwords must match" });
            return;
        }
        await register({ username, email, password });
    };

    useEffect(() => {
        if (user && user.id) history.push("/home");
    }, [user, history]);

    return (
        <AuthLayout>
            <AuthSwitcher heading="Already have an account?" buttonText="Login" url="/login" />
            <AuthForm
                submitHandler={handleRegister}
                headingText="Create an account."
                buttonText="Create"
                inputs={[
                    {
                        label: "Username",
                        name: "username",
                        type: "text",
                        required: true,
                    },
                    {
                        label: "E-mail Address",
                        name: "email",
                        type: "email",
                        required: true,
                    },
                    {
                        label: "Password",
                        name: "password",
                        type: "password",
                        required: true,
                        error: formErrorMessage.confirmPassword,
                    },
                    {
                        label: "Confirm Password",
                        name: "confirm password",
                        type: "password",
                        required: true,
                        error: formErrorMessage.confirmPassword,
                    },
                ]}
            />
        </AuthLayout>
    );
};

export default Signup;
