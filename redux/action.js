let action = {
    addTodo: (title) => {
        return {
            type: 'ADD_TODO',
            title: title
        }
    },
    completeTodo: (id) => {
        return {
            type: 'COMPLETE_TODO',
            id: id
        }
    },
    deleteTodo: (id) => {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    },
    showTodo: () => {
        return { type: 'SHOW_TODO' }
    }
}
export default action;