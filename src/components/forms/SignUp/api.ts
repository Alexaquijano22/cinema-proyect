import { User } from "../../../types";
import { apiFirebase } from "../../../utils";

export type PayloadAddUser = Omit<User, 'id'>;

const signUp = async (data: PayloadAddUser) => {
    try{
        const response = await apiFirebase.post('users.json', data);
        console.log(response)
    }catch(err){
        console.log(err)
    }
}

export {signUp}