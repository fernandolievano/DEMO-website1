import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/contexts/AppContext';

export default function useNavbar() {
  const context = useContext(AppContext);
  const [navbarScrolledStatus, setNavbarScrolledStatus] = useState(false);

  if (context === undefined) {
    throw new Error('useNavbar hook must be used within a provider');
  }

  /**
   * Throttles the scroll event to prevent excessive function calls.
   * @param {Function} fn - The function to be throttled.
   * @param {number} wait - The time interval in milliseconds.
   * @returns {Function} - The throttled function.
   */
  function throttle(fn: () => void, wait: number): () => void {
    let time = Date.now();
    return function () {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  /**
   * Handles the scroll event and updates the navbar scrolled status.
   */
  useEffect(() => {
    // Listen for the scroll event
    window.addEventListener('scroll', throttle(function () {
      // If the user has scrolled past the top of the window
      if (window.scrollY >= (400)) {
        // Set the navbar scrolled status to true
        setNavbarScrolledStatus(true);
      }
      // If the user has scrolled back to the top of the window
      if (window.scrollY < (400)) {
        // Set the navbar scrolled status to false
        setNavbarScrolledStatus(false);
      }
    }, 100)); // Adjust the throttling time (100ms in this case) as needed
  }, []);

  return {
    navbarStatus: context.navbarStatus,
    setNavbarStatus: context.setNavbarStatus,
    navbarScrolledStatus
  };
}
