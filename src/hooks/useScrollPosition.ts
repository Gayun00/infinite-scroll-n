const useScrollPosition = () => {
  const savedScrollPosition = Number(sessionStorage.getItem("scrollPosition"));

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
