import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSquema } from "./validation-schema";
import { defaultValues } from "./default-values";
import { PayloadLogin } from "../../../hooks/useAuth";
import { Grid, TextField } from "@mui/material";
import { Buttons } from "../../common";



const Login: FC = () => {

    const history = useNavigate()

    const { login } = useAuth()

    const onSubmit = async (data: PayloadLogin) => {
        try {
            await login(data)
            history('/')
        } catch (e) {
            console.log(e);
        }
    }

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(validationSquema),
        defaultValues,
    })

    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Grid item >
                    <TextField
                        id="email"
                        label="Email"
                        type="text"
                        {...register("email")}
                    />
                </Grid>
                    {errors.email?.message}
                <Grid item>
                    <TextField
                        id="pass"
                        label="Password"
                        type="password"
                        {...register("password")}
                    />
                </Grid>
                    {errors.password?.message}
                <Buttons type="submit" color="primary" variant="contained">Iniciar sesion</Buttons>
            </form>
        </>
    )
}

export { Login }