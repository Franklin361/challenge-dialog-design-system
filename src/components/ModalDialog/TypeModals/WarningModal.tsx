import { ContentModal } from '../../';
import { useDelete } from '../../../hooks';

import { warningImg } from '../../../utils';
import { PropsModal } from '../../../interfaces';



import './style.css'

export const WarningModal = ({ handleCloseModal, type }:PropsModal) => {
    
    const { deleteOpt, handleDelete } = useDelete(handleCloseModal);

    return (
        <>
            <ContentModal 
                title='¡Cuidado!'  
                desc='No podrás volver atrás'
                src={warningImg} 
                alt={type!} 
                className='icon-container warning'
            />
            
            <div className="btn-container">
                <button className="btn-primary btn-delete" onClick={handleDelete} disabled={deleteOpt}>Borrar</button>
                <button className="btn-cancel" onClick={handleCloseModal} disabled={deleteOpt}>Cancelar</button>
            </div>
            {
                deleteOpt &&  <p className="msg-delete">Elemento borrado correctamente! ✅</p>
            }
            
        </>
    )
}
