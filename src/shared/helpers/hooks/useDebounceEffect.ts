import { useEffect } from 'react';

export const useDebounceEffect = (callback: () => void, delay: number) => {
    useEffect(() => {
        const timerId = setTimeout(callback, delay);

        return () => clearTimeout(timerId);
    }, [callback, delay]);
};
