import { FC } from "react";
import { SignUp as SignUpForm } from "../../components/forms";
import { WithAuth } from "../../hoc";

const SignUp: FC = () => {
    return (
        <SignUpForm/>
    )
}

export const SignUpPage = WithAuth(SignUp);