import { ButtonType } from "./";


export interface ModalState {
    type: ButtonType | null,
    isOpenModal: boolean
}


export interface PropsModal {
    type: ButtonType | null,
    isOpenModal: boolean,
    handleCloseModal: () => void
}