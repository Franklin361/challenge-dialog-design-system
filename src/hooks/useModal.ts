import { useState, useEffect } from 'react';
import { ButtonType, ModalState } from "../interfaces";

export const useModal = () => {
    const [options , setShowModal] = useState<ModalState>({
        type: null,
        isOpenModal: false
    })

    const handleOpenModal = (typeModal: ButtonType) => setShowModal(({ isOpenModal: true, type: typeModal }));

    const handleCloseModal = () => setShowModal({ isOpenModal: false, type: null });

    useEffect(() => {

        const isKeyPressEscape = (e: KeyboardEvent) => (e.key === "Escape") && handleCloseModal();

        window.addEventListener('keyup', isKeyPressEscape)

        return () => window.removeEventListener('keyup', isKeyPressEscape);
    }, [])

    return {
        ...options,
        handleOpenModal,
        handleCloseModal
    }
}