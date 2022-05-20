import { ButtonCloseModal } from '../';
import { PropsModal } from "../../interfaces";
import { handleStopPropagation, showModalDetails } from "../../utils";

import './style.css'

export const Modal = (props: PropsModal) => {

    const { isOpenModal, handleCloseModal } = props;

    return (
        <dialog 
            open={isOpenModal} 
            className='modal-overlay' 
            onClick={handleCloseModal}
        >
            <div 
                className='modal-container' 
                onClick={handleStopPropagation}
            >
                { showModalDetails(props) }
                
                <ButtonCloseModal handleCloseModal={handleCloseModal} />
            </div>
        </dialog>
    )
}

