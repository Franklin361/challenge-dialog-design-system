export type ButtonType = 'error' | 'success' | 'warning';


export interface PropsButton {
    label: string;
    icon: ButtonType;
    onClick?: () => void;
}