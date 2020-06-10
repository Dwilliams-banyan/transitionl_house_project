const defaultFiles = [];

export default (state = defaultFiles,action)=>{
    switch(action.type){

        case "ADD_RESIDENT":
            return [...state, action.resident];

        case "REMOVE_RESIDENT":
            return state.filter(item => item.id !== action.id);

        case "ADD_DAY_OFF_NOTICE":
            return [...state, action.notice]

        case "ADD_MOVE_OUT_NOTICE":
            return [...state, action.notice]

        case "ADD_WEEK_END_PASS_NOTICE":
            return [...state, action.notice]

        default :
        return state
    }
}