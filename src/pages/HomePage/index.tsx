import { ButtonDialog } from "../../components"

import './style.css'

export const HomePage = () => {
    return (
        <main>
            <div className="container-btns">
                <ButtonDialog label="Warning Dialog" icon="warning" />
                <ButtonDialog label="Success Dialog" icon="success" />
                <ButtonDialog label="Error Dialog" icon="error" />
            </div>
        </main>
    )
}