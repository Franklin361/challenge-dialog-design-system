import ReactDOM from "react-dom";

import { Modal } from "./Modal";
import { PropsModal } from '../../interfaces';

import './style.css'

export const ModalDialog = (props: PropsModal) => {

    return (
        ReactDOM.createPortal(
            <Modal {...props}/>,
            document.getElementById("modal")!
        )
    )
};



