const defaultUser = []

export default (state = defaultUser, action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.user]

        case "SIGNIN":
            console.log(state, "Okay that's good")
            return [...state, action.user]

        default:
            return state
    }
}