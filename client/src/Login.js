import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthLayout from "./components/AuthPages/AuthLayout";
import AuthSwitcher from "./components/AuthPages/AuthSwitcher";
import AuthForm from "./components/AuthPages/AuthForm";

const Login = ({ user, login }) => {
    const history = useHistory();

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formElements = form.elements;
        const username = formElements.username.value;
        const password = formElements.password.value;

        await login({ username, password });
    };

    useEffect(() => {
        if (user && user.id) history.push("/home");
    }, [user, history]);

    return (
        <AuthLayout>
            <AuthSwitcher heading="Don't have an account?" buttonText="Create Account" url="/register" />
            <AuthForm
                submitHandler={handleLogin}
                headingText="Welcome back!"
                buttonText="Login"
                inputs={[
                    {
                        label: "Username",
                        name: "username",
                        type: "text",
                        required: true,
                    },
                    {
                      label: "Password",
                      name: "password",
                      type: "password",
                      required: true,
                      forgotPassword: true,
                  },
                ]}
            />
        </AuthLayout>
    );
};

export default Login;
