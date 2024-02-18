import { InfoContainer } from "./Info.styled"

export function Info({initialTodos}) {
    const checkedTodos = initialTodos.filter(todo => todo.completed === true).length
    const todosLength = initialTodos.length

    return (
        <InfoContainer>
            <p>Всього завдань: {todosLength}</p>
            <p>Виконано: {checkedTodos}</p>
        </InfoContainer>
    )
}