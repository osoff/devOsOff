import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    // Проверяем, есть ли хеш в URL
    if (hash) {
      // Находим элемент с указанным хешем
      const targetElement = document.querySelector(hash);

      // Если элемент найден, скроллим к нему
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Если хеша нет, скроллим вверх
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
