import { useEffect, useState } from "react";

export const useDelete = (callback: () => void) => {

    const [deleteOpt, setDeleteOpt] = useState(false)
    let timeout: NodeJS.Timeout;    

    const handleDelete = () => {
        setDeleteOpt(true);
        timeout = setTimeout(callback, 2000);
    }

    useEffect(() => {
        return () => {
            setDeleteOpt(false);
            timeout && clearTimeout(timeout);
        }
    }, [])


    return {
        handleDelete,
        deleteOpt
    }
}