import { Icon } from '../../';
import { PropsButton } from '../../../interfaces';

import './style.css'



export const ButtonDialog = ({ label, icon, onClick }: PropsButton) => {

    return (
        <button className={`btn ${icon}`} onClick={onClick}>
            <span className="button_top">
                {label}
                <Icon name={icon} className="btn-icon"/>
            </span>
        </button>
    )
}