import { useEffect, useCallback, RefObject } from 'react';

/**
 * Custom hook to detect clicks outside of a referenced element.
 * @param ref - The ref of the element to monitor.
 * @param callback - Function to execute when a click outside occurs.
 */
const useClickOutside = <T extends HTMLElement>(
    ref: RefObject<T>,
    callback: (event: MouseEvent) => void,
): void => {
    const handleClick = useCallback(
        (event: MouseEvent): void => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback(event);
            }
        },
        [ref, callback],
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [handleClick]);
};

export default useClickOutside;
