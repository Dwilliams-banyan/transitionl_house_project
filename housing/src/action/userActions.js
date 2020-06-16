import {v4 as uuidv4} from 'uuid'

export const addUser = (user)=>({
    type:"ADD_USER",
    user: {
        ...user,
        id : uuidv4()
    }
})