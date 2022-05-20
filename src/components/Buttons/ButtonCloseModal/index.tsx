import { PropsModal } from "../../../interfaces";

import { closeImg } from '../../../utils';

import './style.css';

export const ButtonCloseModal = ({ handleCloseModal }: Pick<PropsModal, 'handleCloseModal'>) => {
    return (
        <button className='btn-closeModal' onClick={handleCloseModal} >
            <img src={closeImg} alt="close" />
        </button>
    )
}