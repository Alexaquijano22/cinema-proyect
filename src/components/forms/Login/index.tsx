import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSquema } from "./validation-schema";
import { defaultValues } from "./default-values";
import { PayloadLogin } from "../../../hooks/useAuth";
import { Box, TextField, Typography } from "@mui/material";
import { Buttons } from "../../common";

const Login: FC = () => {
  const history = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data: PayloadLogin) => {
    try {
      await login(data);
      history("/");
    } catch (e) {
      console.log(e);
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSquema),
    defaultValues,
  });

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "35px",
          marginBottom: "2em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            sx={{ m: "0em 0em 0.5em 0em" }}
            placeholder="Ingresa tu correo electrónico"
            fullWidth
            id="email"
            label="Correo electrónico"
            type="text"
            {...register("email")}
          />
          <Box>
            <Typography>{errors.email?.message}</Typography>
          </Box>
          <TextField
            sx={{ m: "1em 0em 0.5em 0em" }}
            placeholder="Ingresa tu contraseña"
            fullWidth
            id="pass"
            label="Contraseña"
            type="password"
            {...register("password")}
          />
          <Typography>{errors.password?.message}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Buttons
            text="Iniciar sesion"
            type="submit"
            color="primary"
            variant="contained"
          ></Buttons>
        </Box>
      </Box>
    </form>
  );
};

export { Login };
