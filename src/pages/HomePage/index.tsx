import { ButtonDialog, ModalDialog } from "../../components"
import { useModal } from "../../hooks"
import { buttons } from "../../utils"

import './style.css'

export const HomePage = () => {

    const { handleCloseModal, handleOpenModal, isOpenModal, type } = useModal();

    return (
        <main>
            <div className="container-btns">
                {
                    buttons.map( ({ icon, label }) => (
                        <ButtonDialog
                            key={icon}
                            onClick={() => handleOpenModal(icon)}
                            label={label}
                            icon={icon}
                        />
                    ))
                }
            </div>

            <ModalDialog {...{ handleCloseModal, isOpenModal, type }} />

        </main>
    )
}