import { v4 as uuidv4 } from 'uuid'


export const addResident = (person) => ({
    type: "ADD_RESIDENT",
    resident: {
        id: uuidv4(),
        ...person
    }
})

export const removeResident = (id) => ({
    type: "REMOVE_RESIDENT",
    id
})