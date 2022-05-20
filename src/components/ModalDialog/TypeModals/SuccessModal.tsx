import { ContentModal } from '../../';

import { PropsModal } from "../../../interfaces"

import { successImg } from '../../../utils';

import './style.css'

export const SuccessModal = ({ handleCloseModal, type }: PropsModal) => {

    return (
        <>
            <ContentModal
                src={successImg} 
                alt={type!} 
                className="icon-container success"
                title='¡Vamos!'
                desc='Todo ha salido bien:)'
            />
            <button
                className="btn-primary btn-success"
                onClick={handleCloseModal}
            >
                Cerrar pestaña
            </button>
        </>
    )
}