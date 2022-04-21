export function todoReducer (state = [], action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.filter((value, idx) => {
                    return value !== action.payload;
            });
        default:
            return state;
    }
}