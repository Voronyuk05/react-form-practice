import { Component } from "react";
import { Backdrop, ModalContent } from "./Modal.styled";

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown' , this.handleKeydown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }

    handleOnBackdrop = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    }

    render() {
        return (
            <Backdrop onClick={this.handleOnBackdrop}>
                <ModalContent>
                    {this.props.children}
                </ModalContent>
            </Backdrop>
        )
    }
}