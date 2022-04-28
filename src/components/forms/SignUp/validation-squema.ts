import * as yup from "yup";
import { FORM_VALIDATIONS } from "../../../constants";


export const validationSquema = yup.object().shape({
    email: yup.string().email(FORM_VALIDATIONS.WRONG_FORMAT).required(FORM_VALIDATIONS.REQUIRED),
    password: yup.string().required(FORM_VALIDATIONS.REQUIRED).min(8, FORM_VALIDATIONS.SIZE.EIGTH).max(32),
    name: yup.string().required(FORM_VALIDATIONS.REQUIRED),
    lastName: yup.string().required(FORM_VALIDATIONS.REQUIRED),
    birthdate: yup.string().required(FORM_VALIDATIONS.REQUIRED),
    idDB: yup.string(),
    sessionToken: yup.string(),
    viewed: yup.array(),
    rol: yup.string()
})