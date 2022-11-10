import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Sports fotoHunter`;
    }, [title])
};

export default useTitle;