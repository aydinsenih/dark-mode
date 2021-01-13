import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("darkMode", false);
  return [value, setValue];
};

export default useDarkMode;
