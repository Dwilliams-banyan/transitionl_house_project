import { v4 as uuidv4} from 'uuid'


export const addResident = ({name,age})=>({
    type : "ADD_RESIDENT",
    resident : {
        id:uuidv4(),
        name,
        age

    }
})

export const removeResident = (id)=>({
    type : "REMOVE_RESIDENT",
    id
})