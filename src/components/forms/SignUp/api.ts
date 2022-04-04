import { User } from "../../../types";
import { apiFirebase } from "../../../utils";
import { mapToArray } from "./../../../helpers/mapToArray"

export type PayloadAddUser = Omit<User, 'id'>;

const signUp = async (data: PayloadAddUser) => {
    try{
        const response = await apiFirebase.post('users.json', data);
        return mapToArray(response)
    }catch(err){
        console.log(err)
    }
}

export {signUp}