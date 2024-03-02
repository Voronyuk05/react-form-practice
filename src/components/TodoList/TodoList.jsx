import { TodoItem } from "components/TodoItem/TodoItem";
import { List } from "./TodoList.styled";

export function TodoList({initialTodos, handleDelete, handleCompletedChange}) {
    return (
        <List>
            {initialTodos.map(({id, text, completed}) => {
                return (
                    <TodoItem  key={id} id={id} text={text} completed={completed} handleCompletedChange={handleCompletedChange} handleDelete={handleDelete}/>
                )
            })}
        </List>
    )
}