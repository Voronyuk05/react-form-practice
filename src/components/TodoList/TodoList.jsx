import { TodoItem } from "components/TodoItem/TodoItem";
import { List } from "./TodoList.styled";

export function TodoList({initialTodos, filter, handleDelete, handleCompletedChange}) {
    return (
        <List>
            {initialTodos.map(({id, text, completed}) => {
                const lowerName = text.toLocaleLowerCase()
                const lowerFilter = filter.toLocaleLowerCase()
                
                if (lowerName.includes(lowerFilter)) {
                    return (
                        <TodoItem  key={id} id={id} text={text} completed={completed} handleCompletedChange={handleCompletedChange} handleDelete={handleDelete}/>
                    )
                } else return null
            })}
        </List>
    )
}