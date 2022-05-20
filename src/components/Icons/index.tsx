import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineWarning } from "react-icons/ai";
import { IconBaseProps } from "react-icons";

import { NameIcon } from "../../interfaces";

export interface PropsIcon extends IconBaseProps {
    name: NameIcon;
}

export const Icon = ({name, ...props} : PropsIcon) => {

    const selectedIcon = {
        "warning": <AiOutlineWarning {...props}/>,
        "success": <AiOutlineCheckCircle {...props}/>,
        "error": <AiOutlineCloseCircle {...props}/>
    }
    

    return selectedIcon[name] ?? null
}