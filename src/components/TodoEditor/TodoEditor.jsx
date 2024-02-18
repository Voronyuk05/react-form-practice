import { Component } from "react";
import { Editor, TextArea } from "./TodoEditor.styled";
import { CgPlayListAdd } from "react-icons/cg";
import { Btn } from "components/Btn/Btn";

export class TodoEditor extends Component{

    state={
        goal: '',
    }

    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.handleAddTodo(e.currentTarget.elements.goal.value);
        this.setState({
            goal:''
        })
    }

    onTextareaClick =(e)=>{
        this.setState({
            goal: e.currentTarget.value
        })
    }

    render(){
        return(
            <Editor onSubmit={this.onFormSubmit}>
                <TextArea name="goal" value={this.state.goal} onChange={this.onTextareaClick}></TextArea>
                <Btn type="submit"><CgPlayListAdd /></Btn>
            </Editor>
        )
    }
}