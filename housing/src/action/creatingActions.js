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

export const addDayOffNotice = (notice) => ({
    type : "ADD_DAY_OFF_NOTICE",
    notice
})

export const addMoveOutNotice = (notice) => ({
    type : "ADD_MOVE_OUT_NOTICE",
    notice
})

export const addWeekEndPassNotice = (notice) =>({
    type : "ADD_WEEK_END_PASS_NOTICE",
    notice
})