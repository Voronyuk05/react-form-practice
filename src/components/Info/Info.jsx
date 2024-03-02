
export function Info({initialTodos}) {
    const checkedTodos = initialTodos.filter(todo => todo.completed === true).length
    const todosLength = initialTodos.length

    return (
        <div>
            <p>Всього завдань: {todosLength}</p>
            <p>Виконано: {checkedTodos}</p>
        </div>
    )
}