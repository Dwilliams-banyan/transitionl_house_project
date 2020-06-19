const defaultRequest = []

export default (state = defaultRequest, action) => {
    switch (action.type) {
        case "ADD_DAY_OFF_NOTICE":
            return [...state, action.notice]

        case "ADD_MOVE_OUT_NOTICE":
            return [...state, action.notice]

        case "ADD_WEEK_END_PASS_NOTICE":
            return [...state, action.notice]
        default:
            return state
    }
}