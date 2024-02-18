import { Button } from "./Btn.styled";

export function Btn({children = null, buttonFunc}) {
    return (
        <Button onClick={buttonFunc}>{children}</Button>
    )
}