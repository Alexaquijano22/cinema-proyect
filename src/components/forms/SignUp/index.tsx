import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  AlertTitle,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { User } from "../../../types";
import { Buttons } from "../../common";
import { validationSquema } from "./validation-squema";
import { PayloadAddUser, signUp } from "./api";
import { AuthContext } from "../../../context/Auth";
import { useNavigate } from "react-router-dom";

const defaultValues: Omit<User, "id"> = {
  name: "",
  lastName: "",
  birthdate: "",
  email: "",
  password: "",
  rol: "user",
  viewed: [],
};

const SignUp: FC = () => {

  const history = useNavigate()
  const { state, dispatch } = useContext(AuthContext);

  const onSubmit = (data: PayloadAddUser) => {
    signUp(data).then(() => {
      dispatch({
        type: "ALERT",
        payload: {
          state: true,
          mode: "success",
          title: "Exitoso",
          message: "El registro se ha realizo de manera correcta, serás redirigido para acceder"
        }
      })
      setTimeout(() => {
        dispatch({
          type: "ALERT",
          payload: {
            state: false,
            mode: "success",
            title: "",
            message: ""
          }
        })
        history("/login")
      }, 3000);
    });
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
    <>
      
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} style={{ padding: "0em 0em 1.5em 0em" }}>
          <Grid item xs={12} md={6}>
            <TextField
              sx={{ m: "0em 0em 0.2em 0em" }}
              placeholder="Ingresa tu nombre"
              fullWidth
              id="name"
              label="Nombre"
              type="text"
              {...register("name")}
            />
            <Typography>{errors.name?.message}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              sx={{ m: "0em 0em 0.2em 0em" }}
              placeholder="Ingresa tu apellido"
              fullWidth
              id="lastName"
              label="Apellido"
              type="text"
              {...register("lastName")}
            />
            <Typography>{errors.lastName?.message}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              sx={{ m: "0em 0em 0.2em 0em" }}
              placeholder="Ingresa tu correo electrónico"
              fullWidth
              id="email"
              label="Correo electrónico"
              type="text"
              {...register("email")}
            />
            <Typography>{errors.email?.message}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              sx={{ m: "0em 0em 0.2em 0em", width: "100%" }}
              fullWidth
              id="birthdate"
              label="Fecha de nacimiento"
              type="date"
              {...register("birthdate")}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Typography>{errors.birthdate?.message}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              sx={{ m: "0em 0em 0.2em 0em" }}
              placeholder="Ingresa tu contraseña"
              fullWidth
              id="pass"
              label="Contraseña"
              type="password"
              {...register("password")}
            />
            <Typography>{errors.password?.message}</Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5em",
          }}
        >
          <Buttons
            text="Crear cuenta"
            type="submit"
            color="primary"
            variant="contained"
          ></Buttons>
        </Box>
      </form>
    </>
  );
};

export { SignUp };
