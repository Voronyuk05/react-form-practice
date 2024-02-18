import { Item } from "./TodoItem.styled"
import { Btn } from "components/Btn/Btn"
import { MdDelete } from "react-icons/md";

export function TodoItem({id, text, completed, handleCompletedChange, handleDelete}) {
    return (
        <Item checked={completed}>
            <input type="checkbox" checked={completed} value={completed} onChange={() => handleCompletedChange(id)}/>
            <p>{text}</p>
            <Btn buttonFunc={() => handleDelete(id)}>
                <MdDelete />
            </Btn>
        </Item>
    )
}