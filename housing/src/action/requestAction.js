import { v4 as uuidv4} from 'uuid'
 

export const addDayOffNotice = (notice) => ({
    type : "ADD_DAY_OFF_NOTICE",
    notice: {
        ...notice,
        request : "day off",
        id:uuidv4()
    }
})

export const addMoveOutNotice = (notice) => ({
    type : "ADD_MOVE_OUT_NOTICE",
    notice : {
        ...notice,
        request : "move out",
        id : uuidv4()
    }
    
})

export const addWeekEndPassNotice = (notice) =>({
    type : "ADD_WEEK_END_PASS_NOTICE",
    notice : {
        ...notice,
        request : "weekend pass",
        id: uuidv4()
    }
})


// export const addDayOffNotice = (notice) => ({
//     type : "ADD_DAY_OFF_NOTICE",
//     notice,
//        request : "day off"
// })

// export const addMoveOutNotice = ({name,dayOfMove,address,city,zip,yourState}) => ({
//     type : "ADD_MOVE_OUT_NOTICE",
//     notice : {
//         request : 'move out',
//         name,
//         dayOfMove,
//         address,
//         city,
//         zip,
//         yourState
//     }
// })

// export const addWeekEndPassNotice = ({pass, residentName, dateOfPass, reason, timeLeaving, 
//     returningDate, 
//     returningTime, 
//     nameOfVisitor, 
//     numOfVisitor, 
//     paroleOfficerName, 
//     paroleOfficerNum}
//     ) =>({
//     type : "ADD_WEEK_END_PASS_NOTICE",
//     notice : {
//         request : "weekend pass",
//         pass,
//         residentName,
//         dateOfPass,
//         reason,
//         timeLeaving,
//         returningDate,
//         returningTime,
//         nameOfVisitor,
//         numOfVisitor,
//         paroleOfficerName,
//         paroleOfficerNum 
// }
// })