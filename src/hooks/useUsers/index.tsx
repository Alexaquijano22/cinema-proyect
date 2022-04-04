import { useState } from "react";
import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { apiFirebase } from "../../utils";

const useUsers = () => {

    const [listUsers, setUsers] = useState<User[]>([])

    const getUsers = async (): Promise<User[]> => {
        try {
           const response = await apiFirebase.get('/users.json')
           return mapToArray(response.data)
        } catch(e) {
           console.log(e)
           return []
        }
     }
     
     const deleteUserFb = async (id: string | undefined) => {
        try {
            await apiFirebase.delete(`/users/${id}.json`)
            const listUsers = await getUsers()
            setUsers(listUsers)
        } catch (e) {
           console.log(e)
        }
     }
     
     const generateToken = async (user: User): Promise<string | null> => {
        try {
           const newToken = Math.random().toString(36).substring(2);
           await apiFirebase.patch(`/users/${user.idDB}.json`, { sessionToken: newToken })
           return newToken
        } catch (e) {
           return null
        }
     }
    

    return { getUsers, deleteUserFb, generateToken, listUsers }
}

export { useUsers }