import { ContentModal } from "../../"

import { PropsModal } from '../../../interfaces';

import { errorImg } from '../../../utils';

export const ErrorModal = ({ type }:PropsModal) => {
    return (
        <>
            <ContentModal 
                title='Upss'  
                desc='Algo ha pasado'
                src={errorImg} 
                alt={type!} 
                className="icon-container error"
            />
        </>
    )
}
