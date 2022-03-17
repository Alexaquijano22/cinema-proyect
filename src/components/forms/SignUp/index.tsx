import { FC, FormEvent, useState } from "react";
import { User } from "../../../types";
import { signUp } from "./api";

const defaultValues: Omit<User,'id'> = {
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
    password: "",
}

const SignUp: FC = () => {

    const [inputs, setInputs] = useState(defaultValues)

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault()
        signUp(inputs)
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input id="name" type="text" name="name" value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
            </div>
            <div>
                <label htmlFor="lastName">Apellido</label>
                <input id="lastName" type="text" name="lastName" value={inputs.lastName} onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })} />
            </div>
            <div>
                <label htmlFor="birthdate">Fecha de nacimiento</label>
                <input id="birthdate" type="text" name="birthdate" value={inputs.birthdate} onChange={(e) => setInputs({ ...inputs, birthdate: e.target.value })} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
            </div>
            <div>
                <label htmlFor="pass">Contraseña</label>
                <input id="pass" type="text" name="pass" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
            </div>
            <button type="submit">Crear usuario</button>
        </form>
    )
}

export { SignUp }