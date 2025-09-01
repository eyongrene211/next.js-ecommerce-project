import { useState , useCallback } from "react";
export const useSwipe = (onSwipeLeft, onSwipeRight, swipeThreshold = 50) => {
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);


    const handleTouchStart = useCallback((e) => {
        setTouchStartX(e.touches[0].clientX);
    }, []);

    const handleTouchMove = useCallback((e) => {
        setTouchEndX(e.touches[0].clientX);
    }, []);
    
    const handleTouchEnd = useCallback(() => {
        if (touchStartX === 0 || touchEndX === 0) return;

        const distance = touchStartX - touchEndX;
        if (distance > swipeThreshold) {
            onSwipeLeft();
        } else if (distance <-swipeThreshold) {
            onSwipeRight();
        }

        //Reset values
        setTouchStartX(0);
        setTouchEndX(0);
    }, [touchStartX,touchEndX,swipeThreshold, onSwipeLeft, onSwipeRight])

    return {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd
    };
}