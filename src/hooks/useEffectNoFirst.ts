import { useEffect, useRef } from 'react'
const useEffectNoFirst = (action: () => void, deps: any[]) => {
    const ref = useRef(false)
    useEffect(() => {
        if (!ref.current) {
            ref.current = true
            return
        }
        action()
    }, [deps, action])
}

export default useEffectNoFirst
