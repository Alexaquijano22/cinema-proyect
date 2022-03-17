import { FC, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSquema } from "./validation-schema";
import { defaultValues } from "./default-values";
import { PayloadLogin } from "../../../hooks/useAuth";



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

    const { register, formState: {errors}, handleSubmit } = useForm({
        resolver: yupResolver(validationSquema),
        defaultValues,
    })

    return (

        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" {...register("email")} />
                {errors.email?.message}
            </div>
            <div>
                <label htmlFor="pass">Contraseña</label>
                <input id="pass" type="password" {...register("password")} />
                {errors.password?.message}
            </div>
            <button type="submit">Iniciar sesion</button>
        </form>
    )
}

export { Login }