import { Icon } from '../';

import './style.css'

type ButtonType = 'error' | 'success' | 'warning'

interface Props {
    label: string;
    icon: ButtonType
}

export const ButtonDialog = ({ label, icon }: Props) => {

    return (
        <button className={`btn ${icon}`}>
            <span className="button_top">
                {label}
                <Icon name={icon} className="btn-icon"/>
            </span>
        </button>
    )
}