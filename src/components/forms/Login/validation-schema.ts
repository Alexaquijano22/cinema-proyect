import * as yup from "yup";
import { FORM_VALIDATIONS } from "../../../constants";


export const validationSquema = yup.object().shape({
    email: yup.string().email(FORM_VALIDATIONS.WRONG_FORMAT).required(FORM_VALIDATIONS.REQUIRED),
    password: yup.string().required(FORM_VALIDATIONS.REQUIRED).min(8, FORM_VALIDATIONS.SIZE.EIGTH)
})