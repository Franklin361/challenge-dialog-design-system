import { PropsButton } from "../interfaces";

export const buttons: Pick<PropsButton, 'icon' | 'label'>[] = [
    {
        icon: 'warning',
        label: 'Warning Dialog'
    },
    {
        icon: 'error',
        label: 'Error Dialog'
    },
    {
        icon: 'success',
        label: 'Success Dialog'
    }
]