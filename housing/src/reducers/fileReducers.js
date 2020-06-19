const defaultFiles = [];

export default (state = defaultFiles, action) => {
    switch (action.type) {

        case "ADD_RESIDENT":
            return [...state, action.resident];

        case "REMOVE_RESIDENT":
            return state.filter(item => item.id !== action.id);

        default:
            return state
    }
}