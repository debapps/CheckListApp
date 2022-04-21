export const addTODOItem = (todoItem) => {
    return {
        type: "ADD",
        payload: todoItem
    }
}

export const deleteTODOItem = (todoItem) => {
    return {
        type: "DELETE",
        payload: todoItem
    }
}
