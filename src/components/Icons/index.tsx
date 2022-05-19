import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineWarning } from "react-icons/ai";
import { IconBaseProps } from "react-icons";


export type NameIcon = "warning" | "success" | "error";

export interface IPropsIcon extends IconBaseProps {
    name: NameIcon;
}

export const Icon = ({name, ...props} : IPropsIcon) => {

    const selectedIcon = {
        "warning": <AiOutlineWarning {...props}/>,
        "success": <AiOutlineCheckCircle {...props}/>,
        "error": <AiOutlineCloseCircle {...props}/>
    }
    

    return selectedIcon[name] ?? null
}