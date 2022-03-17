import { mapToArray } from "../helpers";
import { User } from "../types";
import { apiFirebase as api} from "../utils"

const getUsers = async (): Promise<User[]> => {
   try {
      const response = await api.get('/users.json')
      return mapToArray(response.data)
   } catch(e) {
      console.log(e)
      return []
   }
}

const generateToken = async (user: User): Promise<string | null> => {
   try {
      const newToken = Math.random().toString(36).substring(2);
      await api.patch(`/users/${user.id}.json`, { sessionToken: newToken })
      return newToken
   } catch (e) {
      return null
   }
}

export { getUsers, generateToken }