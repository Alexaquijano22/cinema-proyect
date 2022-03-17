import { FC } from "react";
import { WithAuth } from "../../hoc";
import { Login as LoginForm } from "../../components/forms";

const Login: FC = () => {

    return (
        <div>
            <LoginForm/>
        </div>
    )
}

export const LoginPage = WithAuth(Login);