import { WarningModal,ErrorModal, SuccessModal } from "../components"

import { PropsModal } from "../interfaces"

export const showModalDetails = (props: PropsModal) => {

    const selectedModal = {
        "warning": <WarningModal {...props} />,
        "success": <SuccessModal {...props} />,
        "error": <ErrorModal {...props} />
    }

    return selectedModal[props.type!]
}