const useScrollPosition = () => {
  const savedScrollPosition =
    typeof window !== undefined
      ? 0
      : Number(sessionStorage.getItem("scrollPosition")) || 0;

  const saveScrollPosition = () => {
    sessionStorage.setItem("scrollPosition", String(window.scrollY));
  };

  const scrollToSavedPosition = () => {
    window.scrollTo({
      top: savedScrollPosition,
    });
  };

  return { savedScrollPosition, saveScrollPosition, scrollToSavedPosition };
};

export default useScrollPosition;
